<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class companyResource extends JsonResource
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
                'owner_id' => $this->owner_id,
                'name' => $this->name,
                'name_arabic' => $this->name_arabic,
                'vat_number' => $this->vat_number,
                'cr_number' => $this->cr_number,
                'email' => $this->email,
                'contact_number' => $this->contact_number ,
                'logo' =>  null === $this->logo ? '' : URL($this->logo),
                'letter_head' =>  null === $this->letter_head ? '' : URL($this->letter_head),
                'owner' => $this->owner->name ?? '',
                
                ];
    }
}
