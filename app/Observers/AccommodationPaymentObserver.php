<?php

namespace App\Observers;

use App\Models\accommodationPayment;

class AccommodationPaymentObserver
{
    /**
     * Handle the accommodationPayment "created" event.
     *
     * @param  \App\Models\accommodationPayment  $accommodationPayment
     * @return void
     */
    public function creating(accommodationPayment $accommodationPayment)
    {
        $accommodationPayment->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the accommodationPayment "updated" event.
     *
     * @param  \App\Models\accommodationPayment  $accommodationPayment
     * @return void
     */
    public function updated(accommodationPayment $accommodationPayment)
    {
        //
    }

    /**
     * Handle the accommodationPayment "deleted" event.
     *
     * @param  \App\Models\accommodationPayment  $accommodationPayment
     * @return void
     */
    public function deleted(accommodationPayment $accommodationPayment)
    {
        //
    }

    /**
     * Handle the accommodationPayment "restored" event.
     *
     * @param  \App\Models\accommodationPayment  $accommodationPayment
     * @return void
     */
    public function restored(accommodationPayment $accommodationPayment)
    {
        //
    }

    /**
     * Handle the accommodationPayment "force deleted" event.
     *
     * @param  \App\Models\accommodationPayment  $accommodationPayment
     * @return void
     */
    public function forceDeleted(accommodationPayment $accommodationPayment)
    {
        //
    }
}
