import React from "react";
import "./_Faq.scss";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import simplelogo from '../img/simple-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "2rem",
    display: "flex",
    "text-align": "center",
    "flex-direction": "column",
    "justify-content": "center",
    "align-items": "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img src={simplelogo} alt="logo pading" width="50px"/>
      </div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p><div className="focus-text"><span className="underline"></span>Who are you</div> behind Pading?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>We are three good friends from Manchester, Lille and Córdoba.
              We all had the great chance to travel abroad and know international people that are close friends now.
              As it can be complicated to meet somewhere with long-distance friends and family, we decided to launch Pading
              to help people finding the best destinations where to meet and book all tickets easily.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>Why should I <div className="focus-text"><span className="underline"></span>use Pading?</div></p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>Pading is the only travel comparator that allows you to find common destinations from multi departure cities at some dates.
              <br/>
              <br/>
              Andy and Juli are leaving from München and Frankfürt.
              <br/>
              Filippo is leaving from Firenze.
              <br/>
              Eilidh is leaving from Glasgow.
              <br/>
              Violaine and Ludivine are leaving from Paris.
              <br/>
              <br/>
              Our algorithm searches for all the existing travel combinations to meet in a same place. The cheapest destinations for the whole team are highlighted.
              </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>How does Pading finds the <div className="focus-text"><span className="underline"></span>cheapest prices?</div></p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>We work with our partners Kiwi and Trainline to enjoy <b> billion different route combinations of flights and trains</b>. Our algorithm integrates all this data and finds for you the cheapest common destinations.
            <br/>
            <br/>
            You just have to select the next place you would like to meet with your friends/family and book your tickets.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>Why organizing our next meeting with Pading is <div className="focus-text"><span className="underline"></span>so easy</div>?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>Without Pading, organizing the next meeting with your long-distance friends/family can be complicated:
              <ul>
                <li>thinking of a destination</li>
                <li>looking at all the travel possibilities and all the prices for each people</li>
                <li>proposing another destination if this one does not match everyone's criteria</li>
                <li>doing the same again and again until we are good</li>
              </ul>
              <br/>
              With Pading, it looks like this:
              <br/>
              <ul>
                <li>Thinking of a destination</li>
                <li>Filling in the dates and enter all the departure cities you are coming from</li>
                <li>Selecting the common destination among the cheapest ones</li>
              </ul>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>What <div className="focus-text"><span className="underline"></span>means of transport</div> can be booked?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>We look at all the travel possibilities, in the air and on the rails to connect any point in the world to any point.
              We consider flights and trains to make you arrive at your destination to meet each other.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>How <div className="focus-text"><span className="underline"></span>concerns for ecology</div> are integrated into Pading?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>This is a big dilemma. How to facilate travel while considering ecology?
              <br/>
              <br/>
              We want to empower each traveler to offset his/her co2 emissions. For this reason we calculate the climate impact of each destination.
              <br/>
              <br/>
              From our side, we do two things:
              <ul>
                  <li>we plant trees to get a neutral Co2 website</li>
                  <li>we develop and promote as well as possible train journey</li>
              </ul>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>How Pading can be <div className="focus-text"><span className="underline"></span>100% free</div>?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>Pading is an user interface. The booking is made on Kiwi and Trainline secure websites that offer very good guarantee protecting customers from schedule change, delays and cancellations.
              <br/>
              <br/>
              We work as a partner with Kiwi and Trainline booking platforms. For each booking, they give us a commission.
              <br/>
              <br/>
              This way:
              <ul>
                <li>Kiwi and Trainline earn money from carriers</li>
                <li>We earn money from Kiwi and Trainline</li>
                <li>You benefit from the cheapest prices without any additionnal fee</li>
              </ul>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>Who are Kiwi and Trainline, the two <div className="focus-text"><span className="underline"></span>partners</div> you are working with?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>Kiwi is a big, well known and secure booking platform in the travel industry. We work with them to benefit from its data combining 520 billion different route combinations.
              <br/>
              Trainline is Europe's leading train database. They bring together routes, fares and journey times from more than 270 train and coach companies in 45 countries.
              <br/>
              <br/>
              Pading is an user interface. We feed our algorithms with data from Kiwi and Trainline in order to search for common destinations from multiple departure cities and given dates.
              The booking is made on Kiwi and Trainline secure websites that offer very good support and guarantee.
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography className={`${classes.heading} faq-title`}>
            <p>What is Pading's <div className="focus-text"><span className="underline"></span>vision of travel</div>?</p>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="faq-answers">
            <p>We want to make long-distance friends and family meetings easier.
              <br/>
              To reach our goal, we are waiting for your feedback and recommendations to develop Pading in the right direction.
              <br/>
              <br/>
              These are some tracks for the development of Pading:
              <ul>
                <li>Allowing an even more customized and powerful research</li>
                <li>Adding housing proposals in the calculation of the cheapest common destinations to offer you the best global value for money</li>
                <li>Exploring the best dates for a destination already chosen so that your trip will be as cheap as possile</li>
              </ul>
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
