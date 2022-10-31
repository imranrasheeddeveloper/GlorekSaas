<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class purchasing extends Model
{
    use HasFactory;

    protected $fillable = [
        /*'orderNo',*/
        'display_id',
        'purchaseOrderFile',
        'purchaseType',
        'grandTotal',
        'date',
        'subtotal',
        'vat',
        'net_total',
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }

    public function purchasedItems()
    {
        return $this->hasMany(purchased_item::class, 'purchasingId', 'id')->orderBy('id','desc');
    }
}
