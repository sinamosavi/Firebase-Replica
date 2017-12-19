import {Component} from "react";
import FeatureCard from "src/FeatureCard"
import MainFooter from "MainFooter"

class Main extends Component{
    render(){
        return(
            <div class="c5e-modulehost-container flex layout-row" layout="row" flex="">
                <div layout="column" flex="" class="c5e-modulehost-content" transition-spinner="">
                    <ng-transclude onclick={this.hide} style = {bStyle} layout-fill="" ng-if="state!=STATES.LOADING" class="">
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