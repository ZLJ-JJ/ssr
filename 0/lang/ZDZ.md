<!--
 * @Author: your name
 * @Date: 2021-08-28 17:57:23
 * @LastEditTime: 2021-08-30 15:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2b-vietnam-i18n\LangTemplate.md
-->

格式参考
export default {

  <!-- 在pages文件夹下 -->

loginPG: {
login: "Log In"
}

   <!-- 在components文件夹下 -->

     allCouponsCOM: {
    login: "Log In"

}
};
this.$t('')
<!-- 小伟负责  -->

B2Bcomm: Empty-----SelectJump 页面
B2Bcomponents： allCoupons、choiceList、goodList、kefu 文件夹 及 actionSheetPaymen、actionSheetYinhang、class-goods 页面
pages：login、search 文件夹及 account、classify、index、shoppingCart 页面

<!-- 小钟负责  -->

B2Bcomm: Stepper-----Footer 页面 ZSteps

B2Bcomponents： myOrder、tabbar 文件夹 及 commoditySelection、coupon-list、footerExhibition、payTips 页面
pages：confirmOrder、shop、tabbar 文件夹

export default {
    // SwipeCellCOM: {
    //     title: "Delete"
    // },
    // ZInputCOM: {
    //     placeholder: "Please enter the content"
    // },
    FooterCOM: {
        tabbar: [{
                name: 'Home'
            },
            {
                name: 'Categories'
            },
            {
                name: 'Cart'
            },
            {
                name: 'Account'
            },
        ]
    },

    myOrderCOM: {
        title: {
            tl1: "Reason for Cancel Order",
            tl2: "Customer Service",
            tl3: "Frequent Purchase",
            tl4: 'Refund',
            tl5: 'Return',
        },
        btn: {
            cancel: "Cancel",
            confirm: 'Confirm',
            more: 'More',
            review: 'Review',
            update: 'Update',
        },
        unit: "GHS",
        reasonList: {
            name1: "I don't want it now.",
            name2: "I have to re-order for wrong info.",
            name3: "Out of stock.",
            name4: "Others.",
            name5: "Reason for refunding",
            name6: "The size does not confirm with the specification.",
            name7: "The color/style does not confirm with the specification.",
            name8: "The material does not confirm with the specification.",
            name9: "Missing piece(s).",
            name10: "Packaging/goods damaged or stained.",
            name11: "The seller has sent me the wrong goods.",
        },
        toast: {
            txt1: "Parameter “requestModel” cannot be empty.",
            txt2: "Parameter Order ID must be larger than 0.",
            txt3: "The order is nonexistent.",
            txt4: "The order isn’t belong to the current user and cannot be operated.",
            txt5: "The order is paid online. It isn’t Unpaid and cannot be canceled.",
            txt6: "The method of payment is Pay by Cash.It is confirmed on background and cannot",
            txt7: "The order is canceled. Do not cancel repeatedly.",
            txt8: "Choose reasons for canceling order",
        },
        content: {
            ct1: "You don't have any orders yet",
        },
        risk: {
            rk1: "View other",
            rk2: "product",
            rk3: "Pcs",
            rk4: "Total",
            rk5: "Pay Now",
            rk6: "Cancel Order",
            rk7: "Confirm Receipt",
            rk8: "Shut",
            rk9: "Close",

        },
        status: {
            name1: "Unpaid",
            name2: "Undelivered",
            name3: "Unreceived",
            name4: "Done",
            name5: "Closed",
        }
    },
    commoditySelection: {
        tsin: "TSIN",
        quantity: 'Quantity',
        stock: "In stock",
        cart: "Add to Cart",
        buy: "Buy Now",
        risk: {
            title1: `"Goods are wholesaled by boxes, and the purchased quantitymustbe a multiple of"`,
            title2: "PCS",
            title3: "Out of Stock",
        }

    },
    couponList: {
        types: "Type",
        txt1: "Get it now",
        txt2: "Get more",
        txt3: "Delete",
        txt4: "Min Spend",
        txt5: "No coupon",
        toast: {
            ts1: "Unavailable yet",
            ts2: "The goods is not available",
            ts3: "Get the success",
            ts4: "The coupon has been collected",
            ts1: "Unavailable yet",
        }

    },
    footerExhibition: {
        title1: "You May Also Like",
        title2: "Ship from",

    },
    payTips: {
        title1: "Reconsider",
        title2: "Leave",
        title3: "Are you sure want to leave?",

    },
    confirmOrderPG: {
        txt1: `" Due to the update of administrative division, please re-edit the
        current shipping address for sucessful order placement."`,
        txt2: "Go to edit",
        txt3: "Order Placed Successfully",
        txt4: "Cash On Delivery",
        txt5: "Order Total",
        txt6: "Recharge Success!",
        txt7: "Payment successful",
        txt8: 'Your recharge is successfully done.Now you can select "Balance" to pay for your orders online.',
        txt9: "You can find it in “My Order” and track your items through “Check Logistics” in order details.",
        txt10: 'Updated balance',
        txt11: "Unpaid Order",
        txt12: 'Go to "My Order"',
        txt13: 'Continue Shopping',
        txt14: 'Coupons',
        txt15: 'Get it now',
        txt16: 'Min Spend',
        txt17: 'Type',
        txt18: 'Reason for unavailability',
        txt19: "Available",
        txt20: "Not Applicable",
        txt21: "TOTAL TO PAY",
        txt22: "Awaiting Payment",
        txt23: "You will receive a prompt on your mobile number",
        txt24: "to enter your PIN to authorize your payment request of GHS",
        txt25: `"  If you do not receive the prompt within 10s follow the instructions
        below:"`,
        txt26: `"  1.Dial *170# to see the main MTN USSD menu"`,
        txt27: `"  2.Choose 6) My Wallet"`,
        txt28: `"  3.Choose 3) My Approvals"`,
        txt29: `"  4.Enter your PIN to proceed"`,
        txt30: `"  5.Look for the transaction and follow the prompts to authorise it,make
        sure the amount is correct"`,
        txt31: `"  6.Simply dial and try again if not success,or you can change payment
        method"`,
        txt32: `" Change payment method"`,
        txt33: "GET",
        txt34: "Caution",
        txt35: `" 1. In order to prevent fraud, please confirm that it is your own
        operation"`,
        txt36: `" 2. TospinoMarket will not ask for your password, PIN and other
        information by phone or email"`,
        txt37: `"Determine"`,
        txt38: `"Choose operator"`,
        txt39: `"Shipping Address"`,
        txt40: `"Recipient"`,
        txt41: `"Payment Method"`,
        txt42: `"Goods"`,
        txt43: `"Out of Stock"`,
        txt44: `"Unsaleable"`,
        txt45: `"Out of delivery area!"`,
        txt46: `"Over weight!"`,
        txt47: `"Free Shipping"`,
        txt48: `"Transporation"`,
        txt49: `"Fulfillment by Tospino"`,
        txt50: `"Take Delivery"`,
        txt51: `"Ship from"`,
        txt52: `"Ghana"`,
        txt53: `"Overseas"`,
        txt54: `"Please leave a message..."`,
        txt55: `"Sorry, the following items are invalid now!You can return to the cart
        and re-select to place order,or remove them and check out now."`,
        txt56: `" Women's Handbag High Quality Pure PU Leather Fo…"`,
        txt57: `" Return to My Cart"`,
        txt58: `" Total"`,
        txt59: `" Get it within"`,
        txt60: `" after payment."`,
        txt61: `" Order Remark"`,
        txt62: `"  Tips: Products shipped directly from overseas do not support
        returns.Please contact customer service personnel for consulting!!!"`,
        txt63: `"Subtotal"`,
        txt64: `"Total Freight"`,
        txt65: `"Cash on delivery"`,
        txt66: `"Online payment"`,
        txt67: `"We have sent the verification code to your phone"`,
        txt68: `"Balance"`,
        txt69: `"No payment password yet."`,
        txt70: `" Create Now"`,
        txt71: `"Insert Mobile Number without 0"`,
        txt72: `"Set as default payment account"`,
        txt73: `"Pay"`,
        txt74: `"Submit"`,
        txt75: `"Enter Payment Password"`,
        txt76: `"Forgot Password?"`,

        txt77: `"Payment"`,
        title1: `"Bind payment account"`,
        title2: `"Confirm the Order"`,
        title3: `"Forgot Password"`,
        title4: `"Reset Payment Password"`,
        title5: `"Confirm the Order"`,
        title6: `"Payment"`,

        field1: `"Enter new password"`,
        field2: `"Re-enter the new password"`,


    },
    unit: "GHS",
    btn: {
        remove: 'Remove',
        delete: 'delete',
    },
    toast: {
        ts1: "Payment failed, please recharge",
        ts2: "Pending payment, please go to the details to pay",
        ts3: "Please choose operator",
        ts4: "Please enter phone number",
        ts5: "Choose the method of payment.",
        ts6: "Please remove abnormal products",
        ts7: "Please remove abnormal products/change the address",
        ts8: "You haven’t received an address yet, now go to add an address!",
        ts9: "Not less than MOQ",
        ts10: `"Goods are wholesaled by boxes, and the  
        purchased quantitymustbe a multiple of 
        The"`,
        ts11: `"row"`,
        ts12: `"PCS"`,
        ts13: `"Cannot delete all goods"`,
        ts14: `"Please enter the correct phone number"`,
        ts15: `"Set the payment password first."`,
        ts16: `"Wrong payment password"`,
        ts17: `"Insufficient balance"`,
        ts18: `"error"`,
        ts19: `"All passwords should contain 6 figures."`,
        ts20: `"The entered password isn’t consistent with the one confirmed."`,
    },
    shopPG: {
        txt1: "entering the search term",
        txt2: "Store Name Pending",
        txt3: "Following",
        txt4: "Follow",
        txt5: "All",
        txt6: "Popularity",
        txt7: "Price",
        txt8: "Off",
        txt9: "Ghana",
        txt10: "Overseas",
        txt11: "Sold",
        txt12: "Home",
        txt13: "All the goods",
        txt14: "Store Info",
        txt15: "loadmore",
        txt16: "On the pull",
        txt17: "loading",
        txt18: "Its over",
        toast: {
            ts1: "The administrator did not add the link！",
        }

    },
    tabbarPG: {
        title: {
            tl1: 'Details',
            tl2: 'Confirm the Order',
            tl3: `"Reset Email"`,
            tl4: `"Verify Email"`,
            tl5: `"Change Login Password"`,
            tl6: `"Reset phone No."`,
            tl7: `"After Sale Service"`,

            tl8: `"After-sales progress"`,
            tl9: `"Similar Items"`,
            tl10: `"Flash Deals"`,
            tl11: `"Message"`,

        },
        txt1: "Top Up",
        txt2: "Consumption",
        txt3: "Recharge",
        txt4: "Pay by Balance",
        txt5: "Reward",
        txt6: "Reduce",
        txt7: "Refund",
        txt8: "Success",
        txt9: "Failed",
        txt10: "You don't have any orders yet",
        txt11: "Records",
        txt12: "Balance",
        txt13: " Select an amount(you can choose an amount below or enter an amount)",
        txt14: "To the account",
        txt15: "Your Address",
        txt16: `"Tospino's Tips: You can add a new address that is available to our
Designated Distribution Area. Please contact Tospino's customer service
if you fail to add your address."`,
        txt17: "Add New Address",
        txt18: "Shipping Address",
        txt19: "Are you sure to delete the address?",
        txt20: `"Will not cancel any orders gonna be sent to the address that you
delete. If you need to change a new delivery address,please update the
one you need and make a default to avoid impact on future delivery."`,
        txt21: `"About TOSPINO"`,
        txt22: `"Change Login Password"`,
        txt23: `"Change Payment Password"`,
        txt24: `"Bind payment account"`,
        txt25: `"Account and Security"`,

        txt26: `"Receiver"`,
        txt27: `"Phone Number"`,
        txt28: `"State/Province/Region"`,
        txt29: `"City/County/Town"`,
        txt30: `"County/District/Street"`,
        txt31: `"Enter a full address"`,
        txt32: `"Set it as default address"`,



        txt33: `"Email cannot be verified. Contact customer service"`,
        txt34: `"Verification Code"`,
        txt35: `"Email"`,
        txt36: `"Verification Code"`,

        txt37: `"Enter current login password"`,
        txt38: `"Enter new password"`,
        txt39: `"Re-enter the new password"`,
        txt40: `"Enter Payment Password"`,
        txt41: `"The phone number could not be verified."`,
        txt42: `"Contact customer service"`,
        txt43: `"My Shipping Address"`,
        txt44: `"Clear Cache Data"`,
        txt45: `"Log Out"`,
        txt46: `"Tips"`,
        txt47: `"Are you sure to clear cache data?"`,
        txt48: `"Update"`,
        txt49: `"Update Now"`,
        txt50: `"Account"`,
        txt51: `"Gender"`,
        txt52: `"Birthday"`,
        txt53: `"Store name"`,
        txt54: `"Interested Categories"`,

        txt55: `"Female"`,
        txt56: `"Male"`,

        txt57: `"Enter new phone No."`,
        txt58: `"Verification Code"`,
        txt59: `"Select interested"`,
        txt60: `"Verification Code"`,
        txt61: `"Please enter content"`,
        txt62: `"After Sale Service"`,
        txt63: `"order No"`,
        txt64: `"View other"`,
        txt65: `"products"`,
        txt66: `"Details"`,
        txt67: `"You don't have any orders yet"`,

        txt68: `"Unapproved"`,
        txt69: `"Pending Pickup"`,
        txt70: `"Pending Refund"`,
        txt71: `"Refunded"`,
        txt72: `"Refused"`,
        txt73: `"Canceled"`,
        txt74: `"Refund Only"`,
        txt75: ` "Return & Refund"`,
        txt76: ` "Return"`,

        txt77: ` "Process Record"`,
        txt78: ` "Products"`,
        txt79: ` "Refund Method"`,
        txt80: ` "Reason for refunding"`,
        txt81: ` "Refund No"`,
        txt82: ` "Order No"`,
        txt83: ` "Starts from"`,
        txt84: ` "Freight"`,
        txt85: ` "Total refund"`,
        txt86: ` "Dialing"`,

        txt87: ` "Order No."`,
        txt88: ` "Refund"`,
        txt89: ` "After state"`,
        txt90: ` " We will refund you the money you actually paid.The coupon value will
        not be refunded!"`,

        txt91: ` "Products"`,
        txt92: `"Stores"`,
        txt93: `"Sort by"`,
        txt94: `"Latest Date"`,
        txt95: `"Farthest Date"`,

        txt96: `"Store Name Pending"`,
        txt97: `"Followers"`,
        txt98: `"Following"`,
        txt99: `"No favorite stores currently"`,
        txt100: `"Unfollow"`,
        txt101: `"All"`,
        txt102: `"You won't find this store in"`,
        txt103: `"Following" list of the APP.`,
        txt104: `"Products" `,
        txt105: `"Stores"`,
        txt105: `"Stores"`,

        txt106: `"Your Contact"`,
        txt107: `"If you have more detailed feedback to share,just drop in an email to"`,
        txt108: `"service@tospino.com"`,
        txt109: `"We will reply and fix issues ASAP.Thanks"`,
        txt110: `"Your suggestion is important to us.We read but may not reply to each
        submission individually."`,
        txt111: `"Submit"`,
        txt112: `"Thank you!"`,
        txt113: `"Submission Successfully"`,
        txt114: `"Feedback"`,
        txt115: `"APP Suggestion"`,
        txt116: `"Quickly tell us about the abnormal issues you experienced.Upload the detailed pics will be helpful for our quick fixing."`,
        txt117: `"Have a suggestion for APP? Please describe more here and we could be providing better experience."`,

        txt118: `"I want to..."`,
        txt119: `"Have a suggestion for APP? Please describe more here and we could be providing better experience."`,
        
        txt120: `"Buy Now"`,
        txt121: `"Coming Soon"`,

        txt122: `"Overall"`,
        txt123: `"Sales"`,
        txt124: `"Price"`,
        txt125: `"New"`,
        txt126: `"off"`,
        txt127: `"MOQ"`,
        txt128: `"PCS"`,
        txt129: `"Pcs"`,
        txt130: `"Sold"`,
        txt131: `"Select"`,
        txt132: `"Send to"`,
        txt133: `"Please select shipping address"`,

        txt134: `"Ship from Tospino,Estimated Delivery"`,
        txt135: `"1-3 Workdays(Accra Regions)"`,
        txt136: `"3-7 Workdays(Other Regions)"`,
        txt137: `"Ship from"`,
        txt138: `"Ghana"`,
        txt139: `"Overseas" `,
        txt140: `"Estimated Delivery"`,
        txt141: `"Coupons"`,
        txt142: `"More"`,
        txt143: `"Quantity of goods"`,
        txt144: `"Store Name Pending"`,
        txt145: `"Into the shop"`,
        txt146: `"User Redivs"`,
        txt147: `"view all"`,

        txt148: `"Add to Cart"`,
        txt149: `"Buy Now"`,
        txt150: `"Sold out"`,
        txt151: `"Out of delivery area!"`,
        // txt150: `"Sold out"`,
       
        backList: [
            {
              title: "Live Chat",
              content:
                "Connect with Tospino for help on orders, shipment, return and so on"
            },
            {
              title: "APP Feedback",
              content: "Quickly tell us about the abnormal issues"
            },
            {
              title: "APP Suggestion",
              content: "Help us serve you better"
            }
          ],


        unit: "GHS",
        btn: {
            next: 'Next',
            default: 'Default',
            edit: 'Edit',
            delete: 'Delete',
            no: 'No',
            yes: 'Yes',
            add: "add",
            confirm: 'Confirm',
            save: 'Save',
            Ok: 'OK',
            Copy: 'Copy',
            cancal: 'Cancal',
            done: 'Done',
        },
        toast: {
            ts1: `"Please select address"`,
            ts2: `"Fill in the details address."`,
            ts3: `"Fill in the receiver."`,
            ts4: `"Enter phone number"`,
            ts5: `"Please enter the correct mobile phone number"`,
            ts6: "success",
            ts7: `"error"`,
            ts8: `"Please enter your email"`,
            ts9: `"Please enter the email verification code"`,
            ts10: `"Verification code error"`,

            ts11: `"Successful"`,
            ts12: `"Incorrect current login password"`,
            ts13: `"Incorrect current payment password"`,
            ts14: `"Inconsistent passwords"`,
            ts15: `"All passwords should contain 6 figures."`,
            ts16: `"The entered password isn’t consistent with the one confirmed."`,
            ts17: `"New password cannot be the same as the previous one."`,

            ts18: `"Please payment password enter 6 digits"`,
            ts19: `"Please new password enter 6 digits"`,
            ts20: `"Please Re-enter the new password enter 6 digits"`,


            ts21: `"Cache cleared successfully!"`,
            ts22: `"Failed! Please choose manual copy!"`,
            ts23: `"Successful copy!"`,
            ts24: `"Please enter your phone number"`,
            ts24: `"Verification code error"`,

            ts25: `"Whether to cancel the refund order？"`,
            ts26: `"Parameter “requestModel” cannot be empty."`,
            ts27: `"The after-sale order ID must be larger than 0."`,
            ts28: `"The after-sale order is nonexistent."`,
            ts29: `"The after-sale order isn’t belong to the current user and cannot be operated."`,
            ts30: `"The after-sale order is approved and cannot be canceled."`,
            ts31: `"The after-sale order is refused and cannot be canceled."`,
            ts32: ` "The after-sale order is canceled. Do not cancel again."`,

            ts33: `"Please select at least 1 item"`,
            ts34: `"Unfollow Successfully"`,
            ts35: `"Please fill in the feedback detail"`,
            ts36: `"Please fill in the your contact "`,
            ts37: `"Please enter the correct contact number and email address."`,
            ts38: `"The picture is uploading, please wait a moment"`,
        }
    }


};