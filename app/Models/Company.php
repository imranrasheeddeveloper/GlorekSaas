<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    use HasFactory,SoftDeletes;
    
    protected $fillable = [
        'owner_id', 
        'name', 
        'name_arabic', 
        'vat_number',
        'cr_number',
        'email', 
        'contact_number', 
        'logo',
        'letter_head', 
    ];
    
    public function owner()
    {
        return $this->belongsTo(User::class,'owner_id');
    }
}
