<?php

namespace App\Observers;

use App\Models\vendorService;

class VendorServiceObserver
{
    /**
     * Handle the vendorService "created" event.
     *
     * @param  \App\Models\vendorService  $vendorService
     * @return void
     */
    public function creating(vendorService $vendorService)
    {
        $vendorService->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the vendorService "updated" event.
     *
     * @param  \App\Models\vendorService  $vendorService
     * @return void
     */
    public function updated(vendorService $vendorService)
    {
        //
    }

    /**
     * Handle the vendorService "deleted" event.
     *
     * @param  \App\Models\vendorService  $vendorService
     * @return void
     */
    public function deleted(vendorService $vendorService)
    {
        //
    }

    /**
     * Handle the vendorService "restored" event.
     *
     * @param  \App\Models\vendorService  $vendorService
     * @return void
     */
    public function restored(vendorService $vendorService)
    {
        //
    }

    /**
     * Handle the vendorService "force deleted" event.
     *
     * @param  \App\Models\vendorService  $vendorService
     * @return void
     */
    public function forceDeleted(vendorService $vendorService)
    {
        //
    }
}
