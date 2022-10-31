<?php

namespace App\Observers;

use App\Models\employeeResource;

class EmployeeResourceObserver
{
    /**
     * Handle the employeeResource "created" event.
     *
     * @param  \App\Models\employeeResource  $employeeResource
     * @return void
     */
    public function creating(employeeResource $employeeResource)
    {
        $employeeResource->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the employeeResource "updated" event.
     *
     * @param  \App\Models\employeeResource  $employeeResource
     * @return void
     */
    public function updated(employeeResource $employeeResource)
    {
        //
    }

    /**
     * Handle the employeeResource "deleted" event.
     *
     * @param  \App\Models\employeeResource  $employeeResource
     * @return void
     */
    public function deleted(employeeResource $employeeResource)
    {
        //
    }

    /**
     * Handle the employeeResource "restored" event.
     *
     * @param  \App\Models\employeeResource  $employeeResource
     * @return void
     */
    public function restored(employeeResource $employeeResource)
    {
        //
    }

    /**
     * Handle the employeeResource "force deleted" event.
     *
     * @param  \App\Models\employeeResource  $employeeResource
     * @return void
     */
    public function forceDeleted(employeeResource $employeeResource)
    {
        //
    }
}
