<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class accommodationBillPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'accommodation_base_id',
        'amount',
        'date',
        'billType',
        'billMonth', // 2/2021 etc
        'attachment',
        'notes',
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }

    public function accommodations()
    {
        return $this->belongsTo(accommodation_base::class, 'accommodation_base_id');
    }
}
