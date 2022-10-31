<?php

namespace App\Observers;

use App\Models\employee;

class EmployeeObserver
{
    /**
     * Handle the employee "created" event.
     *
     * @param  \App\Models\employee  $employee
     * @return void
     */
    public function creating(employee $employee)
    {
        $employee->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the employee "updated" event.
     *
     * @param  \App\Models\employee  $employee
     * @return void
     */
    public function updated(employee $employee)
    {
        //
    }

    /**
     * Handle the employee "deleted" event.
     *
     * @param  \App\Models\employee  $employee
     * @return void
     */
    public function deleted(employee $employee)
    {
        //
    }

    /**
     * Handle the employee "restored" event.
     *
     * @param  \App\Models\employee  $employee
     * @return void
     */
    public function restored(employee $employee)
    {
        //
    }

    /**
     * Handle the employee "force deleted" event.
     *
     * @param  \App\Models\employee  $employee
     * @return void
     */
    public function forceDeleted(employee $employee)
    {
        //
    }
}
