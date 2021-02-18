# IE

run below commands

npm install
npx testcafe chrome tests/
npx testcafe chrome *.js

Notes:
Discrepancy found for AC2:
Expected
exactly 10 suggestionsmust be displayed in the typeahead dropdown
Actual
Only 8 items are present in autosuggest

Discrepancy found for AC3:
Expected
first result must be "supercalafragalisticexpialadoshus"
Actual
Text string of first result isn't same as expected.
"supercalifragilisticexpialidocious" is found as first result.

