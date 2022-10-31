<?php

namespace App\Observers;

use App\Models\client_base;

class ClientBaseObserver
{
    /**
     * Handle the client_base "created" event.
     *
     * @param  \App\Models\client_base  $client_base
     * @return void
     */
    public function creating(client_base $client_base)
    {
        $client_base->company_id = auth()->user()->company_id;
        
    }

    /**
     * Handle the client_base "updated" event.
     *
     * @param  \App\Models\client_base  $client_base
     * @return void
     */
    public function updated(client_base $client_base)
    {
        //
    }

    /**
     * Handle the client_base "deleted" event.
     *
     * @param  \App\Models\client_base  $client_base
     * @return void
     */
    public function deleted(client_base $client_base)
    {
        $client_base->clientServices()->get()->each->delete();
    }

    /**
     * Handle the client_base "restored" event.
     *
     * @param  \App\Models\client_base  $client_base
     * @return void
     */
    public function restored(client_base $client_base)
    {
        //
    }

    /**
     * Handle the client_base "force deleted" event.
     *
     * @param  \App\Models\client_base  $client_base
     * @return void
     */
    public function forceDeleted(client_base $client_base)
    {
        //
    }
}
