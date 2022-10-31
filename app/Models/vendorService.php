<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class vendorService extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'period',
        'rate',
        'vendor',
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }

    public function vendor()
    {
        return $this->belongsTo(vendor_base::class, 'vendor', 'id');
    }
}
