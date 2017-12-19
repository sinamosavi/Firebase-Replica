import {Component} from "react";

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