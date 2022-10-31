<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Scopes\CompanyStrictScope;

class resource_allocation extends Model
{
    use HasFactory;

    protected $fillable = [
        'resourceOwnerType',
        'resourceOwnerId',
        'allocationDate',
        'attachment',
        'signature',
        'notes',
    ];
    
    protected static function boot()
    {
        parent::boot();
  
        static::addGlobalScope(new CompanyStrictScope);
    }

    public function employee()
    {
        return $this->belongsTo(employee::class, 'resourceOwnerId', 'emp_id');
    }

    public function project()
    {
        return $this->belongsTo(client_base::class, 'resourceOwnerId', 'client_code');
    }


    public function accommodation()
    {
        return $this->belongsTo(accommodation_base::class, 'resourceOwnerId');
    }

    public function projectItems()
    {
        return $this->belongsToMany(
        projectResource::class,
        'allocated_resources_project_items',
        'allocatedResourceId',
        'projectId')->withPivot('quantity');
    }

    public function employeeItems()
    {
        return $this->belongsToMany(
        employeeResource::class,
        'allocated_resources_employee_items',
        'allocatedResourceId',
        'empId')->withPivot('quantity');
    }

    public function accommodationItems()
    {
        return $this->belongsToMany(
        accommodationResource::class,
        'allocated_resources_accommodation_items',
        'allocatedResourceId',
        'accommodationId')->withPivot('quantity');
    }
}
