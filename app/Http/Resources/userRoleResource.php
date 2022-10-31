<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class userRoleResource extends JsonResource
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
                'employees' => $this->decodePermisions($this->permissions->employees),
                'resource' => $this->decodePermisions($this->permissions->resource),
                'resource_item' => $this->decodePermisions($this->permissions->resource_item),
                'accommodation' => $this->decodePermisions($this->permissions->accommodation),
                'rent_payment' => $this->decodePermisions($this->permissions->rent_payment),
                'bill_payment'=> $this->decodePermisions($this->permissions->bill_payment),
                'client' => $this->decodePermisions($this->permissions->client),
                'invoice'=> $this->decodePermisions($this->permissions->invoice),
                'purchase_order'=> $this->decodePermisions($this->permissions->purchase_order),
                'vendor'=> $this->decodePermisions($this->permissions->vendor),
                'user_level'=> $this->decodePermisions($this->permissions->user_level),
                'user' => $this->decodePermisions($this->permissions->user),
                'dashboard'=> $this->permissions->dashboard,
                
                ];
    }

    function decodePermisions($permission)

    {   $permissions = [];
        if ($permission != null && $permission != '') {

                        foreach (explode(',',$permission) as $key => $singlePermission) {

                            switch ($singlePermission) {
                                        case "C":
                                            $permissions[] = 'Create';

                                            break;

                                        case "D":
                                            $permissions[] = 'Delete';

                                            break;

                                        case "E":
                                            $permissions[] = 'Edit';

                                            break;

                                        case "V":
                                            $permissions[] = 'View';

                                            break;

                                          default:
                                            break;
                                        }
                        }
        }

        return $permissions;
    }
}
