<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\api\invoiceController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/createCompany', function () {
    
    
    Artisan::call('make:resource companyResource');
    
    dd(Artisan::output());
    
});

Route::get('/createObserver', function () {
    
    
    Artisan::call('make:observer AccommodationBaseObserver --model=accommodation_base');
    dump(Artisan::output());
    
    Artisan::call('make:observer AccommodationBillPaymentObserver --model=accommodationBillPayment');
    dump(Artisan::output());
    
    Artisan::call('make:observer AccommodationPaymentObserver --model=accommodationPayment');
    dump(Artisan::output());
    
    Artisan::call('make:observer AccommodationResourceObserver --model=accommodationResource');
    dump(Artisan::output());
    
    Artisan::call('make:observer AllocatedItemObserver --model=allocated_item');
    dump(Artisan::output());
    
    Artisan::call('make:observer AuditObserver --model=audit');
    dump(Artisan::output());
    
    Artisan::call('make:observer ClientBaseObserver --model=client_base');
    dump(Artisan::output());
    
    Artisan::call('make:observer ClientServiceObserver --model=clientService');
    dump(Artisan::output());
    
    Artisan::call('make:observer EmployeeObserver --model=employee');
    dump(Artisan::output());
    
    Artisan::call('make:observer EmployeeResourceObserver --model=employeeResource');
    dump(Artisan::output());
    
    Artisan::call('make:observer ExpenseItemObserver --model=expenseItem');
    dump(Artisan::output());
    
    Artisan::call('make:observer InvoiceBaseObserver --model=invoice_base');
    dump(Artisan::output());
    
    Artisan::call('make:observer InvoiceExpenseObserver --model=invoice_expense');
    dump(Artisan::output());
    
    Artisan::call('make:observer ProfessionBaseObserver --model=profession_base');
    dump(Artisan::output());
    
    Artisan::call('make:observer ProjectResourceObserver --model=projectResource');
    dump(Artisan::output());
    
    Artisan::call('make:observer PurchasedItemObserver --model=purchased_item');
    dump(Artisan::output());
    
    Artisan::call('make:observer PurchasingObserver --model=purchasing');
    dump(Artisan::output());
    
    Artisan::call('make:observer ResourceAllocationObserver --model=resource_allocation');
    dump(Artisan::output());
    
    Artisan::call('make:observer SettingsObserver --model=settings');
    
    Artisan::call('make:observer UserObserver --model=User');
    dump(Artisan::output());
    
    Artisan::call('make:observer UserLevelObserver --model=userLevel');
    dump(Artisan::output());
    
    Artisan::call('make:observer UserLevelPermissionObserver --model=userLevelPermission');
    dump(Artisan::output());
    
    Artisan::call('make:observer VendorServiceObserver --model=vendorService');
    dump(Artisan::output());
    
    Artisan::call('make:observer VendorBaseObserver --model=vendor_base');
    dd(Artisan::output());
    
});

Route::get('/storagelink', function () {
    
    
    Artisan::call('storage:link');
    dd(Artisan::output());
    
});
Route::get('/optimize', function () {
    
    Artisan::call('cache:clear');
    dd(Artisan::output());
    
});

Route::get('/print/{invoice_number}', [invoiceController::class, 'printInvoice']);

//Route::get('/info', function () {return view('info');});

Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
