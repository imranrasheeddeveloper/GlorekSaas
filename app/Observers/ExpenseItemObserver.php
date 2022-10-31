<?php

namespace App\Observers;

use App\Models\expenseItem;

class ExpenseItemObserver
{
    /**
     * Handle the expenseItem "created" event.
     *
     * @param  \App\Models\expenseItem  $expenseItem
     * @return void
     */
    public function creating(expenseItem $expenseItem)
    {
        $expenseItem->company_id = auth()->user()->company_id;
    }

    /**
     * Handle the expenseItem "updated" event.
     *
     * @param  \App\Models\expenseItem  $expenseItem
     * @return void
     */
    public function updated(expenseItem $expenseItem)
    {
        //
    }

    /**
     * Handle the expenseItem "deleted" event.
     *
     * @param  \App\Models\expenseItem  $expenseItem
     * @return void
     */
    public function deleted(expenseItem $expenseItem)
    {
        //
    }

    /**
     * Handle the expenseItem "restored" event.
     *
     * @param  \App\Models\expenseItem  $expenseItem
     * @return void
     */
    public function restored(expenseItem $expenseItem)
    {
        //
    }

    /**
     * Handle the expenseItem "force deleted" event.
     *
     * @param  \App\Models\expenseItem  $expenseItem
     * @return void
     */
    public function forceDeleted(expenseItem $expenseItem)
    {
        //
    }
}
