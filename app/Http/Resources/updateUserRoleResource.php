<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class updateUserRoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
                'id' => $this->id,
                'name' => $this->name,
                'userCount' => count($this->user),
                'employees' => explode(',',$this->permissions->employees),
                'resource' => explode(',',$this->permissions->resource),
                'resource_item' => explode(',',$this->permissions->resource_item),
                'accommodation' => explode(',',$this->permissions->accommodation),
                'rent_payment' => explode(',',$this->permissions->rent_payment),
                'bill_payment'=> explode(',',$this->permissions->bill_payment),
                'client' => explode(',',$this->permissions->client),
                'invoice'=> explode(',',$this->permissions->invoice),
                'purchase_order'=> explode(',',$this->permissions->purchase_order),
                'vendor'=> explode(',',$this->permissions->vendor),
                'user_level'=> explode(',',$this->permissions->user_level),
                'user'=> explode(',',$this->permissions->user),
                'dashboard'=> $this->permissions->dashboard,
                
                ];
    }
}
