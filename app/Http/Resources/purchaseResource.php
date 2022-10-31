<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\purchaseItemResource;

class purchaseResource extends JsonResource
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
                'display_id' => $this->display_id,
                /*'orderNo' => $this->orderNo,*/
                'purchaseOrder' =>null === $this->purchaseOrderFile ? '' : URL($this->purchaseOrderFile),
                'purchaseType' => $this->purchaseType,
                'Total' => $this->grandTotal,
                'date' => $this->date,
                'subtotal' => $this->subtotal,
                'vat' => $this->vat,
                'net_total' => $this->net_total,
                'resourceItems' => purchaseItemResource::collection($this->purchasedItems),
                
                ];
    }
}
