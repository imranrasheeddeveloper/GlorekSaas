<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class userLevelPermission extends Model
{
    use HasFactory;

    protected $fillable = [
        'userLevelId',
        'accommodation',
        'addInvoice',
        'allInvoice',
        'employee',
    ];
    
    /*protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }*/

    public function userLevel()
    {
        return $this->belongsTo(userLevel::class);
    }
}
