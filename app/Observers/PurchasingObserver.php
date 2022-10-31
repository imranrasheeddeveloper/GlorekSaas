<?php

namespace App\Observers;

use App\Models\purchasing;

class PurchasingObserver
{
    /**
     * Handle the purchasing "created" event.
     *
     * @param  \App\Models\purchasing  $purchasing
     * @return void
     */
    public function creating(purchasing $purchasing)
    {
        $purchasing->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the purchasing "updated" event.
     *
     * @param  \App\Models\purchasing  $purchasing
     * @return void
     */
    public function updated(purchasing $purchasing)
    {
        //
    }

    /**
     * Handle the purchasing "deleted" event.
     *
     * @param  \App\Models\purchasing  $purchasing
     * @return void
     */
    public function deleted(purchasing $purchasing)
    {
        //
    }

    /**
     * Handle the purchasing "restored" event.
     *
     * @param  \App\Models\purchasing  $purchasing
     * @return void
     */
    public function restored(purchasing $purchasing)
    {
        //
    }

    /**
     * Handle the purchasing "force deleted" event.
     *
     * @param  \App\Models\purchasing  $purchasing
     * @return void
     */
    public function forceDeleted(purchasing $purchasing)
    {
        //
    }
}
