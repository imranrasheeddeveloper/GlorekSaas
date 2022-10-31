<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Pagination\LengthAwarePaginator;

use App\Models\invoice_base;
use App\Models\invoice_expense;
use App\Models\expenseItem;
use App\Models\Company;

use App\Http\Resources\invoiceResource; 
use App\Http\Resources\updateInvoiceResource;
use App\Http\Resources\ExpenceItemResource;

use App\Exports\invoiceExport;
use App\Exports\expenceItemExport;


use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Validator;
use JWTAuth;
use Auth;
use DB;
use PDF;

class invoiceController extends Controller
{

    public function invoiceCsv(Request $request){

        return Excel::download(new invoiceExport($request->searchTerm,(int)$request->limit), 'invoice.xlsx');
    }
    
    public function getInvoices(Request $request){

        if ($request->searchTerm != '' && $request->searchTerm) {
            $resourceRecords = invoice_base::where(DB::raw("CONCAT(`display_invoice_number`, ' ', `client_code`)"), 'LIKE', "%" . $request->searchTerm . "%")->orWhereHas('client', function( $query ) use ( $request ){

                      $query->where(DB::raw("CONCAT(`client_code`, ' ', `client_name`)"), 'LIKE', "%" . $request->searchTerm . "%");

                  })->orderBy('display_invoice_number','desc')->get();
        }
        else
        {
            $resourceRecords = invoice_base::orderBy('display_invoice_number','desc')->get();
        }
        

        $totalRows = count($resourceRecords);

        $resourceRecords = $this->paginaterhelp($request->page_no,$resourceRecords,$request);

        return invoiceResource::collection($resourceRecords)->additional(['success' => true,'totalRows' => $totalRows,'message'=>'Invoices fetched.']);

    }

    public function expenceItemCsv(Request $request){

        return Excel::download(new expenceItemExport($request->searchTerm,(int)$request->limit), 'expenceItems.xlsx');
    }

    public function getExpenceItems(Request $request){

        if ($request->searchTerm != '' && $request->searchTerm) {
            $resourceRecords = expenseItem::where(DB::raw("CONCAT(`id`, ' ', `name`)"), 'LIKE', "%" . $request->searchTerm . "%")->orderBy('id','desc')->get();
        }
        else
        {
            $resourceRecords = expenseItem::orderBy('id','desc')->get();
        }
        

        $totalRows = count($resourceRecords);

        $resourceRecords = $this->paginaterhelp($request->page_no,$resourceRecords,$request);

        return ExpenceItemResource::collection($resourceRecords)->additional(['success' => true,'totalRows' => $totalRows,'message'=>'Expence Items fetched.']);



    }

    public function getExpenceItemDetail(Request $request){

        $messages = [
                        'id.required'  => 'Specify Resource.',
                    ];
    
        $validate = Validator::make($request->all(), [ 
            'id' => 'required',
        ],$messages);

        if ($validate->fails()) { 
                  
                return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);            
            }

                $expenseItem = expenseItem::find($request->id);
            

        if(!$expenseItem){

            return response()->json(['message'=>'Invalid Entry','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }

        return (new ExpenceItemResource($expenseItem))->additional(['success' => true,'message'=>'Expence Item Details fetched.']);

    }

    public function updateExpenceItem(Request $request){


        $messages = [
                        'id.required'  => 'Invalid ID.',
                        'name.required'  => 'Specify Expence Name.',
                        'name_ar.required'  => 'Specify Expence Name Arabic.',
                    ];
    
        $validate = Validator::make($request->all(), [ 
            'name' => 'required',
            'name_ar' => 'required', 
            'id' => 'required',
        ],$messages);


        if ($validate->fails()) { 
                  
                return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);            
            }

        
                $expenseItem = expenseItem::find($request->id);

                $expenseItem->update($request->all());

                $tableName = 'Expence Item';

        


        $user = JWTAuth::user();
        $action = 'UPDATED';
        $itemName = $expenseItem->name.' Expence Item';
        $itemUnique = $expenseItem->id;
        
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);


        return response()->json(['message'=>'Expence Item Updated','success' => true,'data' => json_decode(json_encode($expenseItem))]);


    }

    public function createExpenceItem(Request $request){


        $messages = [
                        
                        'name.required'  => 'Specify Expence Name.',
                        'name_ar.required'  => 'Specify Expence Name Arabic.',
                    ];
    
        $validate = Validator::make($request->all(), [ 
            'name' => 'required',
            'name_ar' => 'required', 
            
        ],$messages);


        if ($validate->fails()) { 
                  
                return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);            
            }

        

                $expenseItem = expenseItem::create($request->all());
               

        $tableName = 'Expence Item';

        


        $user = JWTAuth::user();
        $action = 'CREATED';
        $itemName = $expenseItem->name.' Expence Item';
        $itemUnique = $expenseItem->id;
        
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);


        return response()->json(['message'=>'Expence Item Created','success' => true,'data' => json_decode(json_encode($expenseItem))]);


    }

    public function deleteExpenceItem(Request $request){

        

                $expenseItem = expenseItem::find($request->id);

                $tableName = 'Expence Item';

           

        if(!$expenseItem){

            return response()->json(['message'=>'Invalid Entry','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }

        if(count($expenseItem->invoiceExpences)>0)
        {
            return response()->json(['message'=>'Cannot delete. Item in use by Invoice.','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]); 
        }

        $expenseItem->delete();

        $user = JWTAuth::user();
        $action = 'DELETED';
        $itemName = $expenseItem->name.' Expence Item';
        $itemUnique = $expenseItem->id;
        
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);


        return response()->json(['message'=>'Deleted Successfully','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);

    }


    public function getExpenceItemsDropdown(Request $request){


        $resourceItems = expenseItem::select(DB::raw('id AS value'),'name as text')->get();

        return response()->json(['message'=>'Resource Items fetched','success' => true,'data' => json_decode(json_encode($resourceItems))]);

    }

    public function addInvoice(Request $request){

        $input = $request->all();

        $messages = [
                       
                        'invoice_date.required'  => 'Specify Invoice Date.',

                    ];

        $validate = Validator::make($request->all(), [

            'invoice_date'   => 'required',

            ],$messages);


        if ($validate->fails()) {

                    return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => []], 200);            
                }

        $error = false;

        foreach ($input['services'] as $key => $service) {

            if (!$error) {

                if (empty(trim($service['name']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service Name Cannot Be empty.';
                    // code...
                }

                if (empty(trim($service['quantity']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service Quantity Cannot Be empty.';
                    // code...
                }

                if (empty(trim($service['amount']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service amount Cannot Be empty.';
                    // code...
                }
            }

            
        }

        if ($error) {

                    return response()->json(['message'=>$tmpErrorMsg,'success' => false,'data' => []], 200);            
                }


        

        $next_id = invoice_base::withoutGlobalScopes()->max('invoice_number') + 1;
        $display_invoice_number = invoice_base::max('display_invoice_number') + 1;
        $input['invoice_number'] = $next_id;
        $input['display_invoice_number'] = $display_invoice_number;
        if ($request->has('period') && !empty(trim($request->period))) {
            $time = strtotime($request->period);
            $input['month'] = date('m', strtotime("+1 week",$time));
            $input['year'] = date('Y', strtotime("+1 week",$time));
        }
        //dd($input);
        $invoice = invoice_base::create($input);

        foreach ($input['services'] as $key => $service) {

            if (!$error) {

                $next_service_id = invoice_expense::withoutGlobalScopes()->max('invoice_exp_id') + 1;

                $invoice_expense = new invoice_expense();

                $invoice_expense->invoice_exp_id = $next_service_id;
                $invoice_expense->invoice_number = $input['invoice_number'];
                $invoice_expense->expense_id = $service['name'];
                $invoice_expense->quantity = $service['quantity'];
                $invoice_expense->amount = $service['amount'];
                $invoice_expense->save();
            }

            
        }

        $user = JWTAuth::user();
        $action = 'CREATED';
        $itemName = 'New Invoice';
        $itemUnique = $next_id;
        $tableName = 'Invoices';
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);

        return response()->json(['message'=>'Invoice Created successfully','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);

    }

    public function getInvoiceDetail(Request $request){

        $invoice = invoice_base::where('invoice_number',$request->invoice_number)->first();

        if(!$invoice){

            return response()->json(['message'=>'Invalid ID','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }
        return (new updateInvoiceResource($invoice))->additional(['success' => true,'message'=>'Invoice Detail fetched.']);
    }

    public function printInvoice(Request $request, $invoice_number){
        
            
        $builder = new \AshAllenDesign\ShortURL\Classes\Builder();
        $shortURLObject = $builder->destinationUrl($request->url())->make();
        //$shortURL = $shortURLObject->default_short_url;
          

        $invoice = invoice_base::where('invoice_number',$request->invoice_number)->first();

        if(!$invoice){
            
            $invoice = invoice_base::where('invoice_number',Crypt::decryptString($invoice_number) )->first();
            
            if(!$invoice)
            {

                return response()->json(['message'=>'Invalid ID','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]); 
            }
        }
        
        $company = Company::withoutGlobalScopes()->find($invoice->company_id);
        if($company)
        {
            $background = null === $company->letter_head ? '' : URL($company->letter_head);
        }
        else
        {
            $background = '';
        }
        $encryptedId = Crypt::encryptString($invoice_number);
        
        $shortURL = 'https://app.gulflamar.com/print/'.$encryptedId;
        
        $invoiceDate = date("d-m-Y", strtotime($invoice->invoice_date));
        $sellerName =  DB::table("companies")
        ->select("name")->where('id',$invoice->company_id)->first();
        $sellervat =  DB::table("companies")
        ->select("vat_number")->where('id',$invoice->company_id)->first();
        $sellerCR =  DB::table("companies")
        ->select("cr_number")->where('id',$invoice->company_id)->first();
        
        $str = <<<EOL
TSeller: $sellerName->name
Seller VAT Number: $sellervat->vat_number
Seller CR Number: $sellerCR->cr_number
----------------------------------------
Invoice Number: $invoice->display_invoice_number
Date: $invoiceDate
Total VAT: SR. $invoice->vat
Total Amount Due: SR $invoice->net_total
----------------------------------------
Details: $shortURL
EOL;


            
        
            \QrCode::size(300)
            
            ->format('svg')
            ->size(100)
            ->generate($str, public_path('storage/qrImage/qrcode.svg'));


            
            
        PDF::SetMargins(10, 30, 10);
        PDF::setImageScale(PDF_IMAGE_SCALE_RATIO);
        PDF::SetFont('aefurat', '', 8);
        PDF::AddPage();
         
        $html = view('print.invoice', compact('invoice','company'))->render();

        $bMargin = PDF::getBreakMargin();

        $auto_page_break = PDF::getAutoPageBreak();
            
        PDF::SetFooterMargin(150);
        PDF::SetAutoPageBreak(false,0);
        PDF::Image($background, 0, 0, 210, 297, '', '', '', false, 300, '', false, false, 0);
              PDF::setImageScale(PDF_IMAGE_SCALE_RATIO);
        PDF::setPageMark();
            PDF::setPrintFooter(false);
                // PDF::setPrintFooter(false);
        //////////////////////////////

        PDF::writeHTML($html, true, true, true, false, '');

        PDF::Output('example_061.pdf', 'I');

    }

    public function updateInvoice(Request $request){

        $input = $request->all();
        $invoice = invoice_base::where('invoice_number',$request->invoice_number)->first();

        if(!$invoice){

            return response()->json(['message'=>'Invalid ID','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }

        $messages = [
                       
                        'invoice_date.required'  => 'Specify Invoice Date.',

                    ];

        $validate = Validator::make($request->all(), [

            'invoice_date'   => 'required',

            ],$messages);


        if ($validate->fails()) {

                    return response()->json(['message'=>$validate->errors()->first(),'success' => false,'data' => []], 200);            
                }

        $error = false;

        foreach ($input['services'] as $key => $service) {

                if(is_object($service['name'])){

                $service['name'] = $service['name']->value;

                }
                if(is_array($service['name'])){

                    $service['name'] = $service['name']['value'];

                }
            if (!$error) {

                if (empty(trim($service['name']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service Name Cannot Be empty.';
                    // code...
                }

                if (empty(trim($service['quantity']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service Quantity Cannot Be empty.';
                    // code...
                }

                if (empty(trim($service['amount']))) {

                    $error = true;

                    $tmpErrorMsg = 'Service amount Cannot Be empty.';
                    // code...
                }
            }

            
        }

        if ($error) {

                    return response()->json(['message'=>$tmpErrorMsg,'success' => false,'data' => []], 200);            
                }


        
                //dd($input);
        if($request->monthSelected == true)
        {
            if ($request->has('period') && !empty(trim($request->period))) {
                $time = strtotime($request->period);
                $input['month'] = date('m', strtotime("+1 week",$time));
                $input['year'] = date('Y', strtotime("+1 week",$time));

                //$input['month'] = date('m', $time);
                //$input['year'] = date('Y', $time);
            }
        }

            if ($request->status == 'UnPaid') {
                $input['status'] = 1;
            }
            else if($request->status == 'Paid'){
                $input['status'] = 2;
            }
            else if($request->status == 'Partially Paid'){
                $input['status'] = 3;
            }
        
        $input['invoice_copy'] = $invoice->invoice_copy;

        if($request->has('invoice_copy') && $request->invoice_copy != '' && $request->invoice_copy != null)
        {
            //return 'empty';
            $input['invoice_copy'] = $request->invoice_copy;
        }

        //return $input['invoice_copy'];
        $invoice->update($input);

        foreach ($invoice->invoiceExpences as $key => $service) {

                $service->delete();

        }

        foreach ($input['services'] as $key => $service) {

            if(is_object($service['name'])){

                $service['name'] = $service['name']->value;

            }
            if(is_array($service['name'])){

                $service['name'] = $service['name']['value'];

            }

            if (!$error) {

                $next_service_id = invoice_expense::withoutGlobalScopes()->max('invoice_exp_id') + 1;

                $invoice_expense = new invoice_expense();

                $invoice_expense->invoice_exp_id = $next_service_id;
                $invoice_expense->invoice_number = $invoice->invoice_number;
                $invoice_expense->expense_id = $service['name'];
                $invoice_expense->quantity = $service['quantity'];
                $invoice_expense->amount = $service['amount'];
                $invoice_expense->save();
            }

            
        }

        $user = JWTAuth::user();
        $action = 'UPDATED';
        $itemName = 'Invoice';
        $itemUnique = $invoice->invoice_number;
        $tableName = 'Invoices';
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);

        return response()->json(['message'=>'Invoice Updated successfully','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);

    }

    public function deleteInvoice(Request $request){

        $invoice = invoice_base::where('invoice_number',$request->invoice_number)->first();

        if(!$invoice){

            return response()->json(['message'=>'Invalid ID','success' => false,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);  
        }

        foreach ($invoice->invoiceExpences as $key => $service) {

                $service->delete();

        }

        $invoice->delete();

        $user = JWTAuth::user();
        $action = 'DELETED';
        $itemName = 'Invoice';
        $itemUnique = $invoice->invoice_number;
        $tableName = 'Invoices';
        recordActivity($user,$action,$itemName,$itemUnique,$tableName);
        return response()->json(['message'=>'Invoice Deleted','success' => true,'data' => json_decode(json_encode([], JSON_FORCE_OBJECT))]);
        

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
