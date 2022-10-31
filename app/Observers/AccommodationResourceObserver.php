<?php

namespace App\Observers;

use App\Models\accommodationResource;

class AccommodationResourceObserver
{
    /**
     * Handle the accommodationResource "created" event.
     *
     * @param  \App\Models\accommodationResource  $accommodationResource
     * @return void
     */
    public function creating(accommodationResource $accommodationResource)
    {
        $accommodationResource->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the accommodationResource "updated" event.
     *
     * @param  \App\Models\accommodationResource  $accommodationResource
     * @return void
     */
    public function updated(accommodationResource $accommodationResource)
    {
        //
    }

    /**
     * Handle the accommodationResource "deleted" event.
     *
     * @param  \App\Models\accommodationResource  $accommodationResource
     * @return void
     */
    public function deleted(accommodationResource $accommodationResource)
    {
        //
    }

    /**
     * Handle the accommodationResource "restored" event.
     *
     * @param  \App\Models\accommodationResource  $accommodationResource
     * @return void
     */
    public function restored(accommodationResource $accommodationResource)
    {
        //
    }

    /**
     * Handle the accommodationResource "force deleted" event.
     *
     * @param  \App\Models\accommodationResource  $accommodationResource
     * @return void
     */
    public function forceDeleted(accommodationResource $accommodationResource)
    {
        //
    }
}
