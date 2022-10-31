<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;


use App\Models\accommodation_base;
use App\Observers\AccommodationBaseObserver;

use App\Models\accommodationBillPayment;
use App\Observers\AccommodationBillPaymentObserver;

use App\Models\accommodationPayment;
use App\Observers\AccommodationPaymentObserver;

use App\Models\accommodationResource;
use App\Observers\AccommodationResourceObserver;

use App\Models\allocated_item;
use App\Observers\AllocatedItemObserver;

use App\Models\audit;
use App\Observers\AuditObserver;

use App\Models\client_base;
use App\Observers\ClientBaseObserver;

use App\Models\clientService;
use App\Observers\ClientServiceObserver;

use App\Models\employee;
use App\Observers\EmployeeObserver;

use App\Models\employeeResource;
use App\Observers\EmployeeResourceObserver;

use App\Models\expenseItem;
use App\Observers\ExpenseItemObserver;

use App\Models\invoice_base;
use App\Observers\InvoiceBaseObserver;

use App\Models\invoice_expense;
use App\Observers\InvoiceExpenseObserver;

use App\Models\profession_base;
use App\Observers\ProfessionBaseObserver;

use App\Models\projectResource;
use App\Observers\ProjectResourceObserver;

use App\Models\purchased_item;
use App\Observers\PurchasedItemObserver;

use App\Models\purchasing;
use App\Observers\PurchasingObserver;

use App\Models\resource_allocation;
use App\Observers\ResourceAllocationObserver;

use App\Models\settings;
use App\Observers\SettingsObserver;

use App\Models\userLevel;
use App\Observers\UserLevelObserver;

use App\Models\userLevelPermission;
use App\Observers\UserLevelPermissionObserver;

use App\Models\User;
use App\Observers\UserObserver;

use App\Models\vendor_base;
use App\Observers\VendorBaseObserver;

use App\Models\vendorService;
use App\Observers\VendorServiceObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        accommodation_base::observe(AccommodationBaseObserver::class);
        accommodationBillPayment::observe(AccommodationBillPaymentObserver::class);
        accommodationPayment::observe(AccommodationPaymentObserver::class);
        accommodationResource::observe(AccommodationResourceObserver::class);
        allocated_item::observe(AllocatedItemObserver::class);
        audit::observe(AuditObserver::class);
        client_base::observe(ClientBaseObserver::class);
        clientService::observe(ClientServiceObserver::class);
        employee::observe(EmployeeObserver::class);
        employeeResource::observe(EmployeeResourceObserver::class);
        expenseItem::observe(ExpenseItemObserver::class);
        invoice_base::observe(InvoiceBaseObserver::class);
        invoice_expense::observe(InvoiceExpenseObserver::class);
        profession_base::observe(ProfessionBaseObserver::class);
        projectResource::observe(ProjectResourceObserver::class);
        purchased_item::observe(PurchasedItemObserver::class);
        purchasing::observe(PurchasingObserver::class);
        resource_allocation::observe(ResourceAllocationObserver::class);
        settings::observe(SettingsObserver::class);
        userLevel::observe(UserLevelObserver::class);
        userLevelPermission::observe(UserLevelPermissionObserver::class);
        User::observe(UserObserver::class);
        vendor_base::observe(VendorBaseObserver::class);
        vendorService::observe(VendorServiceObserver::class);
        
    }
}
