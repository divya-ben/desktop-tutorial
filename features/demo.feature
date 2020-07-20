Feature: Validation of Protractor website

@Login
Scenario Outline: Login Functionality

Given user navigates to Protractor website
When user clicks on "Login"
Then user signs in with "<username>" and "<password>"

Examples:
    | username | password |
    | div  | pass  |
    | vee  | pass123  |

@Dropdown
Scenario Outline: Dropdown Functionality

Given user navigates to Protractor website
When user clicks on "Dropdown"
Then user selects "<country>" from list

Examples:
    |country|
    |France|

@Calculator
Scenario Outline: Calculator Functionality

Given user navigates to Protractor website
When user clicks on "Calculator"
Then user enters "<first>","<second>","<operator>" value
And result equals "<result>"

Examples:
    |first|second|operator|result|
    |5|2|-|3|
    |8|4|*|32|


@Grid
Scenario Outline: Grid Functionality

Given user navigates to Protractor website
When user clicks on "Grid"
Then grid contains "<employeeId>"

Examples:
    | employeeId |
    | AB1102s  |

@Social
Scenario: Social Functionality

Given user navigates to Protractor website
When user clicks on "Social"
Then user enters username, password and signs in

#@RadioButton
#Scenario Outline: Radio and Checkbox functionality

#Given user navigates to Protractor website
#When user clicks on "Radio"
#Then user selects "<color>", "<state>" and "<city>"

#Examples:
    #|color|state|city|
    #|Orange|UTTARAKHAND|Haridwar|

