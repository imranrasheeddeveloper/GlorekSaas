<?php

namespace App\Observers;

use App\Models\accommodationBillPayment;

class AccommodationBillPaymentObserver
{
    /**
     * Handle the accommodationBillPayment "created" event.
     *
     * @param  \App\Models\accommodationBillPayment  $accommodationBillPayment
     * @return void
     */
    public function creating(accommodationBillPayment $accommodationBillPayment)
    {
        $accommodationBillPayment->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the accommodationBillPayment "updated" event.
     *
     * @param  \App\Models\accommodationBillPayment  $accommodationBillPayment
     * @return void
     */
    public function updated(accommodationBillPayment $accommodationBillPayment)
    {
        //
    }

    /**
     * Handle the accommodationBillPayment "deleted" event.
     *
     * @param  \App\Models\accommodationBillPayment  $accommodationBillPayment
     * @return void
     */
    public function deleted(accommodationBillPayment $accommodationBillPayment)
    {
        //
    }

    /**
     * Handle the accommodationBillPayment "restored" event.
     *
     * @param  \App\Models\accommodationBillPayment  $accommodationBillPayment
     * @return void
     */
    public function restored(accommodationBillPayment $accommodationBillPayment)
    {
        //
    }

    /**
     * Handle the accommodationBillPayment "force deleted" event.
     *
     * @param  \App\Models\accommodationBillPayment  $accommodationBillPayment
     * @return void
     */
    public function forceDeleted(accommodationBillPayment $accommodationBillPayment)
    {
        //
    }
}
