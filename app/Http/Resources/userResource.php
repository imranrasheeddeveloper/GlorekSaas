<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Company;

class userResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $company = Company::withoutGlobalScopes()->find($this->company_id);
        if($company)
        {
            $logo = URL($company->logo);
        }
        else
        {
            $logo = '';
        }
        return [
                'user_id' => $this->id,
                'token' => $this->token,
                'name' => $this->name,
                'email' => $this->email,
                'user_name' => $this->user_name,
                'role' => $this->userLevelUnscoped->name,
                'fullName'=> $this->name,
                'username' => $this->user_name,
                'ability'=> $this->ability,
                'company_logo'=> $logo,
                'is_rtl'=> $this->is_rtl,
                'company'=> $company ? $company :'',
                /*'profile_pic' => url($this->profile_pic),*/
                
                ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'message' => 'Logged in Succesfully',
        ];
    }
}
