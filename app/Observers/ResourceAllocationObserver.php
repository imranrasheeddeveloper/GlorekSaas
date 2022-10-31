<?php

namespace App\Observers;

use App\Models\resource_allocation;

class ResourceAllocationObserver
{
    /**
     * Handle the resource_allocation "created" event.
     *
     * @param  \App\Models\resource_allocation  $resource_allocation
     * @return void
     */
    public function creating(resource_allocation $resource_allocation)
    {
        $resource_allocation->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the resource_allocation "updated" event.
     *
     * @param  \App\Models\resource_allocation  $resource_allocation
     * @return void
     */
    public function updated(resource_allocation $resource_allocation)
    {
        //
    }

    /**
     * Handle the resource_allocation "deleted" event.
     *
     * @param  \App\Models\resource_allocation  $resource_allocation
     * @return void
     */
    public function deleted(resource_allocation $resource_allocation)
    {
        //
    }

    /**
     * Handle the resource_allocation "restored" event.
     *
     * @param  \App\Models\resource_allocation  $resource_allocation
     * @return void
     */
    public function restored(resource_allocation $resource_allocation)
    {
        //
    }

    /**
     * Handle the resource_allocation "force deleted" event.
     *
     * @param  \App\Models\resource_allocation  $resource_allocation
     * @return void
     */
    public function forceDeleted(resource_allocation $resource_allocation)
    {
        //
    }
}
