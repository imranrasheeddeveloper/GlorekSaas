<?php

namespace App\Observers;

use App\Models\vendor_base;

class VendorBaseObserver
{
    /**
     * Handle the vendor_base "created" event.
     *
     * @param  \App\Models\vendor_base  $vendor_base
     * @return void
     */
    public function creating(vendor_base $vendor_base)
    {
        $vendor_base->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the vendor_base "updated" event.
     *
     * @param  \App\Models\vendor_base  $vendor_base
     * @return void
     */
    public function updated(vendor_base $vendor_base)
    {
        //
    }

    /**
     * Handle the vendor_base "deleted" event.
     *
     * @param  \App\Models\vendor_base  $vendor_base
     * @return void
     */
    public function deleted(vendor_base $vendor_base)
    {
        //
    }

    /**
     * Handle the vendor_base "restored" event.
     *
     * @param  \App\Models\vendor_base  $vendor_base
     * @return void
     */
    public function restored(vendor_base $vendor_base)
    {
        //
    }

    /**
     * Handle the vendor_base "force deleted" event.
     *
     * @param  \App\Models\vendor_base  $vendor_base
     * @return void
     */
    public function forceDeleted(vendor_base $vendor_base)
    {
        //
    }
}
