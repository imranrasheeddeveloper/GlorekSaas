<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class expenseItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'name_ar',
    ];

    public function invoiceExpences()
    {
        return $this->hasMany(invoice_expense::class, 'expense_id', 'id');
    }
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }
}
