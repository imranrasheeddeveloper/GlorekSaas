<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\userLevelController;
use App\Http\Controllers\api\employeeController;
use App\Http\Controllers\api\resourceCenterController;
use App\Http\Controllers\api\purchasingController;
use App\Http\Controllers\api\accommodationController;
use App\Http\Controllers\api\vendorController;
use App\Http\Controllers\api\clientController;
use App\Http\Controllers\api\invoiceController;
use App\Http\Controllers\api\permissionController;
use App\Http\Controllers\api\auditController;
use App\Http\Controllers\api\settingController;
use App\Http\Controllers\api\dashboardController;
use App\Http\Controllers\api\CompanyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);

Route::post('/signup', [UserController::class, 'signup']);

Route::get('/employeeCsv', [employeeController::class, 'employeeCsv']);
Route::get('/resourceCsv', [resourceCenterController::class, 'resourceCsv']);
Route::get('/accommodationCsv', [accommodationController::class, 'accommodationCsv']);
Route::get('/rentPaymentCsv', [accommodationController::class, 'rentPaymentCsv']);
Route::get('/billPaymentCsv', [accommodationController::class, 'billPaymentCsv']);
Route::get('/clientCsv', [clientController::class, 'clientCsv']);
Route::get('/invoiceCsv', [invoiceController::class, 'invoiceCsv']);
Route::get('/expenceItemCsv', [invoiceController::class, 'expenceItemCsv']);
Route::get('/purchaseCsv', [purchasingController::class, 'purchaseCsv']);
Route::get('/vendorCsv', [vendorController::class, 'vendorCsv']);

Route::group(['middleware' => ['jwt.verify']], function() {

    Route::get('/getUserLevel', [userLevelController::class, 'getUserLevel']);

     Route::post('/deleteImage', [settingController::class, 'deleteImage']);



    Route::get('/getemployee', [employeeController::class, 'getemployee']);
    Route::post('/createEmployee', [employeeController::class, 'createEmployee']);
    Route::get('/getEmployeeDetail', [employeeController::class, 'getEmployeeDetail']);
    Route::post('/updateEmployee', [employeeController::class, 'updateEmployee']);
    Route::get('/deleteEmployee', [employeeController::class, 'deleteEmployee']);

    Route::get('/vendorsDropdown', [employeeController::class, 'vendorsDropdown']);
    Route::get('/clientsDropdown', [employeeController::class, 'clientsDropdown']);
    Route::get('/accommodationsDropdown', [employeeController::class, 'accommodationsDropdown']);
    Route::get('/professionsDropdown', [employeeController::class, 'professionsDropdown']);

    Route::get('/getEmployeeDropdown', [employeeController::class, 'getEmployeeDropdown']);
    Route::get('/getResourceItemsDropdown', [employeeController::class, 'getResourceItemsDropdown']);

    Route::post('/allocateResource', [resourceCenterController::class, 'allocateResource']);
    Route::get('/getAllocatedResources', [resourceCenterController::class, 'getAllocatedResources']);
    Route::get('/getAllocatedResourceDetail', [resourceCenterController::class, 'getAllocatedResourceDetail']);
    Route::get('/deleteAllocation', [resourceCenterController::class, 'deleteAllocation']);
    Route::post('/updateAllocatedResources', [resourceCenterController::class, 'updateAllocatedResources']);

    Route::get('/getResourceItems', [resourceCenterController::class, 'getResourceItems']);
    Route::get('/deleteResourceItem', [resourceCenterController::class, 'deleteResourceItem']);
    Route::post('/addResourceItem', [resourceCenterController::class, 'addResourceItem']);
    Route::get('/getResourceItemDetail', [resourceCenterController::class, 'getResourceItemDetail']);
    Route::post('/updateResourceItem', [resourceCenterController::class, 'updateResourceItem']);
    

    Route::get('/getAllResources', [purchasingController::class, 'getAllResources']);

    Route::post('/imgUpload', [purchasingController::class, 'imgUpload']);
    Route::post('/createPurchase', [purchasingController::class, 'createPurchase']);
    Route::get('/getPurchaseList', [purchasingController::class, 'getPurchaseList']);
    Route::get('/deletePurchase', [purchasingController::class, 'deletePurchase']);
    Route::get('/getPurchaseDetail', [purchasingController::class, 'getPurchaseDetail']);
    Route::post('/updatePurchase', [purchasingController::class, 'updatePurchase']);

    Route::post('/jwt/refresh-token', [UserController::class, 'refreshToken']);

    Route::get('/getAccommodation', [accommodationController::class, 'getAccommodation']);
    Route::post('/addAccommodation', [accommodationController::class, 'addAccommodation']);
    Route::get('/getAccommodationDetail', [accommodationController::class, 'getAccommodationDetail']);
    Route::post('/updateAccommodation', [accommodationController::class, 'updateAccommodation']);
    Route::get('/deleteAccommodation', [accommodationController::class, 'deleteAccommodation']);

    //accommodation payment
    Route::post('/addAccommodationPayment', [accommodationController::class, 'addAccommodationPayment']);

    Route::get('/getAccommodationPayment', [accommodationController::class, 'getAccommodationPayment']);
    Route::get('/getPaymentDetails', [accommodationController::class, 'getPaymentDetails']);
    Route::post('/updateAccommodationPayment', [accommodationController::class, 'updateAccommodationPayment']);
    Route::get('/deleteAccommodationPayment', [accommodationController::class, 'deleteAccommodationPayment']);

    //accommodation Bill Payment

    Route::post('/addAccommodationBillPayment', [accommodationController::class, 'addAccommodationBillPayment']);
    Route::get('/getAccommodationBillPayment', [accommodationController::class, 'getAccommodationBillPayment']);
    Route::get('/getBillPaymentDetails', [accommodationController::class, 'getBillPaymentDetails']);
    Route::post('/updateAccommodationBillPayment', [accommodationController::class, 'updateAccommodationBillPayment']);
    
    Route::get('/deleteAccommodationBillPayment', [accommodationController::class, 'deleteAccommodationBillPayment']);


    //vendors routes
    

    Route::get('/getVendors', [vendorController::class, 'getVendors']);
    Route::get('/deleteVendor', [vendorController::class, 'deleteVendor']);
    Route::post('/addVendor', [vendorController::class, 'addVendor']);
    Route::get('/getVendorDetail', [vendorController::class, 'getVendorDetail']);
    Route::post('/updateVendor', [vendorController::class, 'updateVendor']);

    //client routes

    Route::get('/getClients', [clientController::class, 'getClients']);
    Route::post('/createClient', [clientController::class, 'createClient']);
    Route::get('/getClientDetail', [clientController::class, 'getClientDetail']);
    Route::post('/updateClient', [clientController::class, 'updateClient']);

    Route::get('/deleteClient', [clientController::class, 'deleteClient']);

    //invoice routes

    Route::get('/getInvoices', [invoiceController::class, 'getInvoices']);
    Route::get('/getExpenceItemsDropdown', [invoiceController::class, 'getExpenceItemsDropdown']);
    Route::post('/addInvoice', [invoiceController::class, 'addInvoice']);
    Route::get('/getInvoiceDetail', [invoiceController::class, 'getInvoiceDetail']);
    Route::post('/updateInvoice', [invoiceController::class, 'updateInvoice']);
    Route::get('/deleteInvoice', [invoiceController::class, 'deleteInvoice']);

    Route::get('/getExpenceItems', [invoiceController::class, 'getExpenceItems']);
    Route::get('/getExpenceItemDetail', [invoiceController::class, 'getExpenceItemDetail']);
    Route::post('/updateExpenceItem', [invoiceController::class, 'updateExpenceItem']);
    Route::post('/createExpenceItem', [invoiceController::class, 'createExpenceItem']);
    Route::get('/deleteExpenceItem', [invoiceController::class, 'deleteExpenceItem']);

    //Route::get('/print/{invoice_number}', [invoiceController::class, 'printInvoice']);

    //user Level routes

    Route::get('/getRoles', [permissionController::class, 'getRoles']);
    Route::post('/createRole', [permissionController::class, 'createRole']);
    Route::get('/getRoleDetail', [permissionController::class, 'getRoleDetail']);
    Route::post('/updateRoleDetail', [permissionController::class, 'updateRoleDetail']);



    //users  routes

    Route::get('/getUsers', [UserController::class, 'getUsers']);
    Route::get('/getRolesDropdown', [UserController::class, 'getRolesDropdown']);
    Route::post('/addUser', [UserController::class, 'addUser']);
    Route::get('/getUserDetail', [UserController::class, 'getUserDetail']);
    Route::post('/updateUser', [UserController::class, 'updateUser']);

    Route::get('/getProfile', [UserController::class, 'getProfile']);
    Route::post('/updateProfile', [UserController::class, 'updateProfile']);

    Route::get('/getPermissions', [UserController::class, 'getPermissions']);
    
    //Company  routes
    Route::get('/getCompanies', [CompanyController::class, 'getCompanies']);
    Route::get('/getOwnerDropdown', [CompanyController::class, 'getOwnerDropdown']);
    Route::post('/createCompany', [CompanyController::class, 'createCompany']);
    Route::get('/getCompanyDetail', [CompanyController::class, 'getCompanyDetail']);
    Route::post('/updateCompany', [CompanyController::class, 'updateCompany']);

    //Audit routes

    Route::get('/getAuditTrail', [auditController::class, 'getAuditTrail']);

    //app Settings variables

    Route::get('/getsettings', [settingController::class, 'getsettings']);
    Route::post('/updateSettings', [settingController::class, 'updateSettings']);

    //dashboard info
    Route::get('/dashboardStats', [dashboardController::class, 'dashboardStats']);
    Route::get('/getMonthlyRevenues', [dashboardController::class, 'getMonthlyRevenues']);
    Route::get('/dashboardProductStat', [dashboardController::class, 'dashboardProductStat']);
    Route::get('/dashboardUpcomingRents', [dashboardController::class, 'dashboardUpcomingRents']);
});
