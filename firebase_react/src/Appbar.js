import {Component} from "react";
import ViewOnlyTag from "ViewOnlyTag"
import AppbarLinks from "AppbarLink"

class Appbar extends Component{
    render(){
        return(
            <fb-appbar fb-on-show-mobile-nav="controller.onShowMobileNav()" fb-show-project-switcher="true" style={{
                position: 'fixed',
                zIndex: 200,
                width: '100%',
            }}>
                <div class="fb-appbar-container">
                    <div class="fb-appbar" ng-class="{'has-visible-nav-or-page-crumb': appBar.showAppBarCrumbs}" >
                        <div class="fb-appbar-top-left fb-appbar-top-left-has-menu" ng-class="{'fb-appbar-top-left-has-menu': appBar.shouldShowTopLeftMenu()}">
                            <div class="fb-appbar-top-left-menu-container">
                                <button class="md-icon-button fb-appbar-nav-drawer-icon md-button md-ink-ripple md-dark-theme" type="button" md-theme="dark" onclick="this.menu">
                                    <i class="material-icons">
                                        menu
                                    </i>
                                </button>
                            </div>
                            <button class="fb-appbar-logo-button md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-click="appBar.goToHome()" aria-label="Go Home">
                                <div class="c5e-logo-lockup">
                                    <img fb-logo="" fb-size="28" class="c5e-logo-lockup-icon" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"/>
                                    <h1 class="fb-appbar-logo-logotype-container">
                                        <img src="//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg" class="c5e-logo-lockup-logotype" ng-if="::!appBar.shouldShowDarkLogo()" alt="Firebase"/>
                                    </h1>
                                </div>
                            </button>
                        </div>
                        <div class="fb-appbar-nav-and-page-crumbs">
                            <a class="fb-appbar-page-crumb">
                                Overview
                            </a>
                        </div>
                        <div class="flex">
                        </div>
                        <div class="fb-appbar-action-crumbs">
                            <a class="fb-appbar-action-crumb md-gmp-blue-theme ng-hide is-hidden" ng-show="appBar.actionCrumbs.length" ng-click="appBar.onActionCrumbClick(appBar.actionCrumbs[0])" ng-class="{'is-hidden': !appBar.showAppBarCrumbs, 'has-icon': !!appBar.actionCrumbs[0].icon}" aria-hidden="true">
                                <span>
                                </span>
                            </a>
                        </div>
                        <ViewOnlyTag/>
                        <AppbarLinks/>
                        <fb-alerts>
                            <md-menu md-position-mode="target-right target" class="fb-appbar-more-actions-menu md-menu _md">
                                <div class="dropdown">
                                    <button id="g" class="md-icon-button md-button md-ink-ripple md-dark-theme" type="button" md-theme="dark">
                                        <i class="material-icons">
                                            more_vert
                                        </i>
                                    </button>
                                    <div class="dropdown-content">
                                        <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ui-sref="subscriptions.overview" role="menuitem" href="/subscriptions/overview">
                                            Firebase doces
                                        </a>
                                        <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ui-sref="subscriptions.overview" role="menuitem" href="/subscriptions/overview">
                                            Alert subscriptions
                                        </a>
                                    </div>
                                </div>
                                <div class="_md md-open-menu-container md-whiteframe-z2" id="menu_container_2" aria-hidden="true" style={{display: 'none'}}>
                                    <md-menu-content role="menu">
                                        <md-menu-item>
                                            <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ui-sref="subscriptions.overview" role="menuitem" href="/subscriptions/overview">
                                                Alert subscriptions
                                            </a>
                                        </md-menu-item>
                                    </md-menu-content>
                                </div>
                            </md-menu>
                            <fb-alerts-effects ng-version="0.0.0-PLACEHOLDER">
                            </fb-alerts-effects>
                        </fb-alerts>
                        <md-menu class="fb-appbar-mobile-overflow-menu md-menu _md" md-position-mode="target-right target">
                            <button class="md-icon-button md-button md-ink-ripple md-dark-theme" type="button" ng-transclude="" md-theme="dark" ng-click="$mdMenu.open($event)" aria-label="More options" aria-haspopup="true" aria-expanded="false" aria-owns="menu_container_0">
                                <i class="material-icons">
                                    more_vert
                                </i>
                            </button>
                            <div class="_md md-open-menu-container md-whiteframe-z2" id="menu_container_0" style={{display: 'none'}} aria-hidden="true">
                                <md-menu-content class="fb-appbar-mobile-overflow-content" role="menu">
                                    <md-menu-item>
                                        <a class="c5e-external-link md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" href="https://firebase.google.com/docs/?authuser=0" fb-doc-href="/docs/" target="_blank" role="menuitem">
                                            Firebase docs
                                        </a>
                                    </md-menu-item>
                                    <md-menu-divider ng-if="appBar.isAlertSubscriptionsVisible()" role="separator">
                                    </md-menu-divider>
                                    <md-menu-item ng-if="appBar.isAlertSubscriptionsVisible()">
                                        <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ui-sref="subscriptions.overview" role="menuitem" href="/subscriptions/overview">
                                            Alert subscriptions
                                        </a>
                                    </md-menu-item>
                                </md-menu-content>
                            </div>
                        </md-menu>
                        <div class="fb-appbar-login-area" id="fb-account-container">
                            <div id="ogc" class="fb-appbar-onegoogle-visible">
                                <div class="gb_wc gb_3d gb_wd gb_tb" id="gb">
                                    <div class="gb_yc gb_lb gb_xc gb_Zd" ng-non-bindable="" style={{padding:4 +'px', height:'auto', display:'block'}}>
                                        <div class="gb_zc" style={{display:'block'}}><div class="gb_ib gb_4c gb_yg gb_R gb_pf"style={{padding: 4 + 'px'}}>
                                            <div class="gb_Lc gb_kb gb_yg gb_R">
                                                <a class="gb_b gb_gb gb_R" aria-label="Google Account: reza abolghasemi(a.re.morteza@gmail.com)" href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://console.firebase.google.com/" role="button" tabindex="0" aria-expanded="false">
                                            <span class="gb_bb gbii">

                                    </span>
                                                </a>
                                                <div class="gb_rb">

                                                </div>
                                                <div class="gb_qb">

                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fb-appbar>
        );
    }
}