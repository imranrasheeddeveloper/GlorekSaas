<?php

use Illuminate\Pagination\LengthAwarePaginator;

use App\Models\User;
use App\Models\audit;



function changeDateFormate($date,$date_format){

    return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $date)->format($date_format);    

}

function recordActivity(User $user,$action,$itemName,$itemUnique,$tableName){

    $audit = new audit();

    $audit->user_id = $user->id;
    $audit->detail = 'User '.$user->name.'('.$user->id.') '.$action.' '.$itemName.'('.$itemUnique.') in '.$tableName.' Table';
    $audit->save();   

}

function IsSuperAdmin(User $user)
{
    return $user->id == 0 ? true :false;
}

function CompanyAdminRoleRef()
{
    return '7';
}

function superAdminDashboard()
{
    return 'superAdmin';
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