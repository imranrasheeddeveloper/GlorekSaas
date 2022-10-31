<?php

namespace App\Observers;

use App\Models\purchased_item;

class PurchasedItemObserver
{
    /**
     * Handle the purchased_item "created" event.
     *
     * @param  \App\Models\purchased_item  $purchased_item
     * @return void
     */
    public function creating(purchased_item $purchased_item)
    {
        $purchased_item->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the purchased_item "updated" event.
     *
     * @param  \App\Models\purchased_item  $purchased_item
     * @return void
     */
    public function updated(purchased_item $purchased_item)
    {
        //
    }

    /**
     * Handle the purchased_item "deleted" event.
     *
     * @param  \App\Models\purchased_item  $purchased_item
     * @return void
     */
    public function deleted(purchased_item $purchased_item)
    {
        //
    }

    /**
     * Handle the purchased_item "restored" event.
     *
     * @param  \App\Models\purchased_item  $purchased_item
     * @return void
     */
    public function restored(purchased_item $purchased_item)
    {
        //
    }

    /**
     * Handle the purchased_item "force deleted" event.
     *
     * @param  \App\Models\purchased_item  $purchased_item
     * @return void
     */
    public function forceDeleted(purchased_item $purchased_item)
    {
        //
    }
}
