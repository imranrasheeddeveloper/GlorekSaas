<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class clientService extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'period',
        'rate',
        'client',
    ];

    public function client()
    {
        return $this->belongsTo(client_base::class, 'client', 'client_code');
    }
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }
}
