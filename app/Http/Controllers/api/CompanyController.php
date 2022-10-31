<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Pagination\LengthAwarePaginator;
use Tymon\JWTAuth\Exceptions\JWTException;

use App\Http\Resources\companyResource;

use App\Models\Company;
use App\Models\User;
use App\Models\settings;

use Validator;
use JWTAuth;
use Auth;
use DB;

class CompanyController extends Controller
{
    public function getCompanies(Request $request){

        if ($request->searchTerm != '' && $request->searchTerm) {
            $resourceRecords = Company::where(DB::raw("CONCAT(`id`, ' ', `vat_number`,' ', `name`)"), 'LIKE', "%" . $request->searchTerm . "%")->orWhereHas('owner', function( $query ) use ( $request ){

                      $query->where(DB::raw("CONCAT(`id`, ' ', `name`)"), 'LIKE', "%" . $request->searchTerm . "%");

                  })->orderBy('id','desc')->get();
        }
        else
        {
            $resourceRecords = Company::orderBy('id','desc')->get();
        }
        

        $totalRows = count($resourceRecords);

        $resourceRecords = $this->paginaterhelp($request->page_no,$resourceRecords,$request);

        return companyResource::collection($resourceRecords)->additional(['success' => true,'totalRows' => $totalRows,'message'=>'Companies fetched.']);

    }
    
    public function getOwnerDropdown(Request $request){
        
            $userLevels = User::select('name','id')->where('company_id',null)->where('role', CompanyAdminRoleRef())->where(DB::raw("CONCAT(`name`, ' ', `id`)"), 'LIKE', "%" . $request->id . "%")->get();

            return response()->json(['message'=>'Owners Fetched','success' => true,'data' => json_decode(json_encode($userLevels))]);

    }
    
    public function createCompany(Request $request){

        
        $messages = [
                       
                        'owner_id.required'  => 'Specify Company Owner.',
                        'name.required'  => 'name is required.',
                        'name_arabic.required'  => 'Name AR is required.',
                        'vat_number.required'  => 'VAT# is required.',
                        'cr_number.required'  => 'CR# is required.',
                        'email.required'  => 'email is required.',
                        'contact_number.required'  => 'Contact# is required.',
                        'logo.required'  => 'logo is required.',
                        'letter_head.required'  => 'Letter Head is required.',

                    ];

        $validate = Validator::make($request->all(), [
            'owner_id'   => 'required|max:110',
            'name'   => 'required|max:110',
            'name_arabic'   => 'required|max:110',
            'vat_number'   => 'required|max:110',
            'cr_number'   => 'required|max:110',
            'email'   => 'required|max:110',
            'contact_number'   => 'required|max:110',
            'logo'   => 'required|file',
            'letter_head'   => 'required|file',

            ],$messages);


        if ($validate->fails()) {

                    return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => []], 200);            
                }
                
        $user = User::find($request->owner_id);
        
        if (!$user) {

                    return response()->json(['message'=>'Invalid Owner Reference','success' => false,'data' => []], 200);            
                }

        $input =  $request->all();

        
        if($request->has('logo') && $request->logo != '' && $request->logo != null)
        {
            $input['logo'] = $this->img_upload($request->logo);
            //dd($input);
        }

        if($request->has('letter_head') && $request->letter_head != '' && $request->letter_head != null)
        {
            $input['letter_head'] = $this->img_upload($request->letter_head);
        }

        //dd($input['clientServices']);
        $company = Company::create($input);
        $user->company_id = $company->id;
        $user->save();
        
        $this->setDefaultSettings($company->id);

        $user = JWTAuth::user();
        $action = 'CREATED';
        $itemName = $company->name;
        $itemUnique = $company->id;
        $tableName = 'Companies';
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);


        return response()->json(['message'=>'Company Created','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);


    }
    
    public function getCompanyDetail(Request $request){

        $company = Company::where('id',$request->id)->first();

        if(!$company){

            return response()->json(['message'=>'Invalid ID','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }
        return (new companyResource($company))->additional(['success' => true,'message'=>'Company Detail fetched.']);
    }
    
    public function updateCompany(Request $request){

        $company = Company::where('id',$request->id)->first();

        if(!$company){

            return response()->json(['message'=>'Invalid Entry','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }

        
        $messages = [
                       
                        'owner_id.required'  => 'Specify Company Owner.',
                        'name.required'  => 'name is required.',
                        'name_arabic.required'  => 'Name AR is required.',
                        'vat_number.required'  => 'VAT# is required.',
                        'cr_number.required'  => 'CR# is required.',
                        'email.required'  => 'email is required.',
                        'contact_number.required'  => 'Contact# is required.',
                        'logo.required'  => 'logo is required.',
                        'letter_head.required'  => 'Letter Head is required.',

                    ];

        $validate = Validator::make($request->all(), [
            'owner_id'   => 'required|max:110',
            'name'   => 'required|max:110',
            'name_arabic'   => 'required|max:110',
            'vat_number'   => 'required|max:110',
            'cr_number'   => 'required|max:110',
            'email'   => 'required|max:110',
            'contact_number'   => 'required|max:110',
            'logo'   => 'nullable|file',
            'letter_head'   => 'nullable|file',

            ],$messages);


        if ($validate->fails()) {

                    return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => []], 200);            
                }

        $user = User::find($request->owner_id);
        
        if (!$user) {

                    return response()->json(['message'=>'Invalid Owner Reference','success' => false,'data' => []], 200);            
                }

        $input =  $request->all();

        
        if($request->has('logo') && $request->logo != '' && $request->logo != null)
        {
            $input['logo'] = $this->img_upload($request->logo);
            //dd($input);
        }

        if($request->has('letter_head') && $request->letter_head != '' && $request->letter_head != null)
        {
            $input['letter_head'] = $this->img_upload($request->letter_head);
        }
        
        if($request->owner_id != $company->owner_id)
        {
            $oldUser = User::find($company->owner_id);
        
            if ($oldUser) {
    
                        $oldUser->company_id = null;
                        $oldUser->save();            
                    }
        }

        //dd($input['clientServices']);
        $company->update($input);
        $user->company_id = $company->id;
        $user->save();
        
        $this->setDefaultSettings($company->id);

        $user = JWTAuth::user();
        $action = 'CREATED';
        $itemName = $company->name;
        $itemUnique = $company->id;
        $tableName = 'Companies';
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);


        return response()->json(['message'=>'Company Updated','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);


    }
    
    function setDefaultSettings($company_id)
    {
        $settings = new settings();
        $settings->company_id = $company_id;
        $settings->vat = 0;
        $settings->save();
        
    }
    
    function img_upload($tmpImage)

    {
        $image = $tmpImage;
        $file_fullname = $image->getClientOriginalName();
        $file_name = pathinfo($file_fullname, PATHINFO_FILENAME);
        $file_extension = $image->getClientOriginalExtension();
        $rand_namer = now();
        $rand_namer = preg_replace('/\s+/', '_', trim($rand_namer));
        $rand_namer = preg_replace('/:+/', '_', trim($rand_namer));
        $file_namefor_db =$file_name . '_' . $rand_namer . '.' . $file_extension;
        $file_namefor_db = preg_replace('/\s+/', '_', trim($file_namefor_db));

        $image-> storeAs('image' ,$file_namefor_db,'public');
        $pic = ('storage/image/' . $file_namefor_db);

        return $pic;
    }
    
    function paginaterhelp($page,$items,$request)

    {

        
                $page = $page; 

                // Number of items per page
                $perPage = 10;

                // Start displaying items from this number;
                $offSet = ($page * $perPage) - $perPage; // Start displaying items from this number

                // Get only the items you need using array_slice 
               
              if(is_array($items))
               {
                   $itemsForCurrentPage = array_slice($items, $offSet, $perPage, false);
               }
               else{
                      $itemsForCurrentPage = $items->slice($offSet, $perPage);
                    /*$itemsForCurrentPage = array_slice($items->toArray(), $offSet, $perPage, false);*/
               }
                
                // Return the paginator with only 10 items but with the count of all items and set the it on the correct page
                $result = new LengthAwarePaginator($itemsForCurrentPage, count($items), $perPage, $page, ['path' => $request->url(), 'query' => $request->query()]);

              //  $result = json_decode(json_encode($result,true),true);
                
                return $result->items();

    }
}
