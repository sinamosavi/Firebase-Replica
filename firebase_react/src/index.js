import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';




let that1, that2;

class ViewOnlyTag extends Component{
    render(){
        return(
            <div class="fb-appbar-viewonly-chip fb-appbar-viewonly-chip-desktop" ng-if="::appBar.shouldShowViewOnlyChip()">
                View only
            </div>
        );
    }
}
class AppbarLink extends Component{
    render(){
        return(
            <a md-no-ink="" fb-doc-href="/docs/" target="_blank" class="fb-appbar-link md-gmp-blue-theme" href="https://firebase.google.com/docs/?authuser=0">
                Go to docs
            </a>
        );
    }
}
class Appbar extends Component{

    menu = function(){
        that2.setState(()=>({opacity : 0.6}));
        that1.setState(()=>({
            webkitTransform:'translate3d(0,0,0)',
            transform:'translate3d(0,0,0)',
            visibility:'visible',
            webkitTransition:'transform .3s cubic-bezier(0.4,0.0,1,1),visibility 0s ease .3s',
            transition:'transform .3s cubic-bezier(0.4,0.0,1,1),visibility 0s ease .3s'
        }));
    }
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
                                <button class="md-icon-button fb-appbar-nav-drawer-icon md-button md-ink-ripple md-dark-theme" type="button" md-theme="dark" onclick={this.menu}>
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
                        <AppbarLink/>
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

class NavbarItem extends Component{
    constructor(props){
        super();
        this.icon = props.icon;
        this.title = props.title;
    }
    render(){
        return(<fb-navbar-item class="develop" ng-repeat="entry in ::group.entries track by entry.name" nav-entry="::entry" fb-click="controller.navTargetClick()">
            <a class="c5e-nav-item md-gmp-blue-theme" href="/project/fir-demo-project/authentication/users" ng-class="::{'c5e-selected-entry': $ctrl.isSelected}" ng-click="$ctrl.onClick()" aria-label="Authentication">
                <div class="c5e-nav-item-lockup">
                    <i class="c5e-nav-icon gmp-icons" ng-class="::{ 'gmp-icons': $ctrl.navEntry.iconFamily == $ctrl.iconFamily.GMP, 'material-icons': $ctrl.navEntry.iconFamily == $ctrl.iconFamily.MATERIAL }">
                        {this.icon}
                    </i>
                    <span class="c5e-entry-displayname">
                        {this.title}
                    </span>
                </div>
            </a>
        </fb-navbar-item>);
    }
}
class Navbar extends Component{
    constructor(){
        super();
        that1 = this;
        that1.state = {style :{
            position: 'fixed',
                top: 50 + 'px'
        }};
    }
    render(){
        return(
            <fb-navbar id="f" fb-on-toggle="controller.onNavBarToggle()" fb-on-nav-target-click="controller.onHideMobileNav()" style={this.state.style}>
                <div class="c5e-nav">
                    <button class="c5e-nav-mobile-logo-button" type="button" ng-transclude="" ng-click="controller.goToHome()" aria-label="Go Home">
                        <div class="c5e-logo-lockup">
                            <img class="c5e-logo-lockup-icon" fb-logo="" fb-size="28" src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"/>
                                <img class="c5e-logo-lockup-logotype" src="//www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_black_18dp.svg" alt="Firebase"/>
                        </div>
                    </button>
                    <div class="c5e-nav-group c5e-nav-group-root">
                        <NavbarItem icon={"gmp_nav20_overview"} title = {"Overview"}/>
                        <md-menu class="c5e-navbar-item-settings md-menu _md c5e-navbar-item-settings-expanded" ng-if="::!!controller.settings" ng-repeat="settingsItemType in ::['expanded', 'collapsed']" ng-class="::['c5e-navbar-item-settings-' + settingsItemType]" md-offset="40 0" md-position-mode="target target">
                            <button class="md-button md-gmp-blue-theme md-ink-ripple md-icon-button" type="button">
                                <i class="c5e-nav-icon gmp-icons">
                                    gmp_nav20_settings
                                </i>
                            </button>
                        </md-menu>
                        <md-menu class="c5e-navbar-item-settings md-menu _md c5e-navbar-item-settings-collapsed" ng-if="::!!controller.settings" ng-repeat="settingsItemType in ::['expanded', 'collapsed']" ng-class="::['c5e-navbar-item-settings-' + settingsItemType]" md-offset="68 0" md-position-mode="target target">
                            <button class="md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-click="$mdMenu.open($event)" aria-label="Settings" ng-class="{'c5e-selected-entry': controller.currentModuleName == controller.settings.name, 'md-icon-button': settingsItemType == 'expanded'}" aria-haspopup="true" aria-expanded="false" aria-owns="menu_container_6">
                                <i class="c5e-nav-icon gmp-icons">
                                    gmp_nav20_settings
                                </i>
                            </button>
                            <div class="_md md-open-menu-container md-whiteframe-z2" id="menu_container_6" aria-hidden="true" style={{display: 'none'}}>
                                <md-menu-content class="c5e-navbar-settings-menu-content" role="menu">
                                    <md-menu-item>
                                        <a class="md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" href="/project/fir-demo-project/settings/general/" ng-click="controller.navEntryClick(controller.settings)" role="menuitem">
                                            Project settings
                                        </a>
                                    </md-menu-item>
                                    <md-menu-divider role="separator">
                                    </md-menu-divider>
                                    <div class="fb-menu-section-header c5e-navbar-settings-menu-cloud-header">
                                        Managed in Google Cloud Console
                                    </div>
                                    <md-menu-item ng-if="!!controller.billingUrl">
                                        <a class="c5e-external-link md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ng-href="https://console.cloud.google.com/billing/007CF4-B56D9B-5EBD0C/history?consoleUI=FIREBASE&amp;authuser=0&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview" ng-click="controller.navTargetClick()" target="_blank" role="menuitem" href="https://console.cloud.google.com/billing/007CF4-B56D9B-5EBD0C/history?consoleUI=FIREBASE&amp;authuser=0&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview">
                                            Billing
                                        </a>
                                    </md-menu-item>
                                    <md-menu-item>
                                        <a class="c5e-external-link md-button md-gmp-blue-theme md-ink-ripple" ng-transclude="" ng-href="https://console.cloud.google.com/permissions/projectpermissions?consoleUI=FIREBASE&amp;authuser=0&amp;project=fir-demo-project&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview" ng-click="controller.navTargetClick()" target="_blank" role="menuitem" href="https://console.cloud.google.com/permissions/projectpermissions?consoleUI=FIREBASE&amp;authuser=0&amp;project=fir-demo-project&amp;consoleReturnUrl=https%3A%2F%2Fconsole.firebase.google.com%2Fproject%2Ffir-demo-project%2Foverview">
                                            Users and permissions
                                        </a>
                                    </md-menu-item>
                                </md-menu-content>
                            </div>
                        </md-menu>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-top">
                        <NavbarItem icon={"gmp_nav20_analytics"} title = {"Analytics"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-develop" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">
                            develop
                        </div>
                        <NavbarItem icon={"gmp_nav20_auth"} title = {"Authentication"}/>
                        <NavbarItem icon={"gmp_nav20_database"} title = {"Database"}/>
                        <NavbarItem icon={"gmp_nav20_storage"} title = {"Storage"}/>
                        <NavbarItem icon={"gmp_nav20_hosting"} title = {"Hosting"}/>
                        <NavbarItem icon={"gmp_nav20_functions"} title = {"Functions"}/>
                        <NavbarItem icon={"gmp_nav20_test_lab"} title = {"Test Lab"}/>
                        <NavbarItem icon={"gmp_nav20_crash"} title = {"Crash Reporting"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-grow" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">grow
                        </div>
                        <NavbarItem icon={"gmp_nav20_notifications"} title = {"Notifications"}/>
                        <NavbarItem icon={"gmp_nav20_remote_config"} title = {"Remote Config"}/>
                        <NavbarItem icon={"gmp_nav20_durable_links"} title = {"Dynamic Links"}/>
                    </div>
                    <div class="c5e-nav-group c5e-nav-group-earn" ng-repeat="group in ::controller.navGroups track by group.groupName" ng-if="::group.entries.length > 0">
                        <div class="c5e-nav-heading">earn
                        </div>
                        <NavbarItem icon={"gmp_nav20_admob"} title = {"AdMob"}/>
                    </div>
                </div>
                <div class="c5e-nav-footer">
                    <fb-navbar-billing-widget>
                        <div class="c5e-nav-billing" ng-if="::controller.billingBarInfo">
                            <div layout="column" flex="" class="layout-column flex">
                                <div class="c5e-nav-billing-text">Blaze
                                </div>
                                <div class="c5e-nav-billing-details" ng-bind-html="controller.billingBarInfo.subtitle">
                                    <span>
                                        Pay as you go
                                    </span>
                                </div>

                            </div>
                            <div class="fb-role-disabled-popover-container">
                                <button class="c5e-nav-upgrade-button md-primary md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-if="controller.billingBarInfo.upgradeType == controller.BillingUpgradeTypes.MODIFY" fb-role-required="owner" fb-role-disabled="popover" fb-popover-position="right" fb-popover-alignment="middle" fb-popover-text="You cannot modify this plan because you are not an owner on this project" ng-click="controller.onUpgradeBillingClick()" disabled="disabled" ng-disabled="true">
                                    <div> Modify
                                    </div>
                                </button>
                                <div class="fb-disabled-popover">
                                </div>
                            </div>
                        </div>
                    </fb-navbar-billing-widget>
                </div>
                <button class="c5e-nav-expando md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-click="controller.toggleExpandState()">
                    <i class="material-icons">chevron_left
                    </i>
                </button>
            </fb-navbar>);
    }
}
class FeatureCard extends Component{
    constructor(props){
        super();
        this.title = props.title;
        this.description = props.description;
        this.image = props.image;
    }
    render(){
        return(
            <div md-cell="4" ng-repeat="featureCard in controller.featureCards" layout="column" class="layout-column">
                <md-card class="c5e-overview-feature-card _md md-gmp-blue-theme">

                    <div ng-if="featureCard.bannerImage" class="c5e-overview-feature-card-banner-header">
                        <img ng-src="images/analytics.png" src={this.image}/>
                    </div>
                    <div class="c5e-overview-feature-card-content flex" flex="">
                        <div class="c5e-overview-feature-card-title">{this.title}
                        </div>
                        <div class="c5e-overview-feature-card-description">{this.description}
                        </div>
                    </div>
                    <div class="c5e-overview-feature-card-links layout-align-space-between-center layout-row" layout="row" layout-align="space-between center">
                        <a fb-doc-href="/docs/analytics/" target="_blank" class="c5e-overview-feature-card-learnmore md-gmp-blue-theme" href="https://firebase.google.com/docs/analytics/?authuser=0"> Learn more
                        </a>
                        <button class="md-primary c5e-overview-feature-card-getstarted md-button md-gmp-blue-theme md-ink-ripple" type="button" ng-transclude="" ng-hide="!featureCard.moduleName" ng-click="controller.featureCardClicked(featureCard)" aria-hidden="false"> Get started
                        </button>
                    </div>
                </md-card>
            </div>
        );
    }
}
class MainFooter extends Component{
    render(){
        return(<div class="c5e-overview-console-footer">
            <console-footer>
                <div class="c5e-footer">
                    <div md-grid="">
                        <div md-cell="12" layout="row" layout-align="center start" class="layout-align-center-start layout-row">
                            <a target="_blank" fb-doc-href="/terms" class="md-gmp-blue-theme" href="https://firebase.google.com/terms?authuser=0">
                                Terms

                            </a> &nbsp;&nbsp;·&nbsp;&nbsp;
                            <a target="_blank" href="https://www.google.com/policies/privacy/" class="md-gmp-blue-theme">Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </console-footer>
        </div>);
    }
}
class Main extends Component{
    constructor(){
        super();
        that2 = this;
        that2.state = {style : {opacity : 1}}}

    hide = function(){
        that1.setState(()=>({opacity : 1}));
        if(document.documentElement.clientWidth < 920){
            that1.setState(()=>(
                {webkitTransform:'translate3d(-256,0,0)',
                transform:'translate3d(-256,0,0)',
                visibility:'visible',
                webkitTransition:'transform .3s cubic-bezier(0.4,0.0,1,1),visibility 0s ease .3s',
                transition:'transform .3s cubic-bezier(0.4,0.0,1,1),visibility 0s ease .3s'
            }));
        }
    }
    render(){
        return(
        <div class="c5e-modulehost-container flex layout-row" layout="row" flex="">
            <div layout="column" flex="" class="c5e-modulehost-content" transition-spinner="">
                <ng-transclude onclick={this.hide} style = {this.state.style} layout-fill="" ng-if="state!=STATES.LOADING" class="">
                    <div ui-view="module_content" layout="column" class="">
                        <div ui-view="_module_overview">
                            <fb-core-chrome-feature-bar-help-destination fb-doc-help-href="/support/guides/launch-checklist" fb-label="Firebase Launch Checklist">
                            </fb-core-chrome-feature-bar-help-destination>
                            <div class="c5e-overview-feature-cards">
                                <div md-grid="">
                                    <div md-cell="12">
                                        <fb-canvas-bar>
                                            <div class="fb-canvas-bar-container" ng-transclude=""> Discover Firebase
                                            </div>
                                        </fb-canvas-bar>
                                    </div>
                                    <FeatureCard title={"Analytics"} description={"Get detailed analytics to measure and analyze how users engage with your app"} image={"analytics.png"}/>
                                    <FeatureCard title={"Authentication"} description={"Authenticate and manage users from a variety of providers without server-side code"} image={"auth.png"}/>
                                    <FeatureCard title={"Database"} description={"Store and sync data in realtime across all connected clients"} image={"database.png"}/>
                                    <FeatureCard title={"Storage"} description={"Store and retrieve user generated content like images, audio, and video without server-side code"} image={"storage.png"}/>
                                    <FeatureCard title={"Hosting"} description={"Deploy web and mobile web apps in seconds using a secure global content delivery network"} image={"hosting.png"}/>
                                    <FeatureCard title={"Cloud Functions"} description={"Run managed backend code for your mobile app that extends and connects Firebase features"} image={"functions.png"}/>
                                    <FeatureCard title={"Test Lab"} description={"Test your Android apps against a wide range of devices"} image={"testlab.png"}/>
                                </div>
                                <MainFooter/>
                            </div>

                        </div>
                    </div>
                </ng-transclude>
            </div>
        </div>
        );
    };
}


class App extends Component{
    render(){
        return(
            <div>
                <Appbar/>
                <Navbar/>
                <Main/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('App'));
registerServiceWorker();
