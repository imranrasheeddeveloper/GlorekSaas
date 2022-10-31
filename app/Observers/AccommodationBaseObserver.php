<?php

namespace App\Observers;

use App\Models\accommodation_base;

class AccommodationBaseObserver
{
    /**
     * Handle the accommodation_base "created" event.
     *
     * @param  \App\Models\accommodation_base  $accommodation_base
     * @return void
     */
    public function creating(accommodation_base $accommodation_base)
    {
        $accommodation_base->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the accommodation_base "updated" event.
     *
     * @param  \App\Models\accommodation_base  $accommodation_base
     * @return void
     */
    public function updated(accommodation_base $accommodation_base)
    {
        //
    }

    /**
     * Handle the accommodation_base "deleted" event.
     *
     * @param  \App\Models\accommodation_base  $accommodation_base
     * @return void
     */
    public function deleted(accommodation_base $accommodation_base)
    {
        //
    }

    /**
     * Handle the accommodation_base "restored" event.
     *
     * @param  \App\Models\accommodation_base  $accommodation_base
     * @return void
     */
    public function restored(accommodation_base $accommodation_base)
    {
        //
    }

    /**
     * Handle the accommodation_base "force deleted" event.
     *
     * @param  \App\Models\accommodation_base  $accommodation_base
     * @return void
     */
    public function forceDeleted(accommodation_base $accommodation_base)
    {
        //
    }
}
