<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class accommodationResource extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }
    
    public function resource()
    {
        return $this->belongsToMany(
        resource_allocation::class,
        'allocated_resources_accommodation_items',
        'accommodationId',
        'allocatedResourceId',)->withPivot('quantity');
    }
}
