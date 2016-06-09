var returnChar = function (text, length) {
            

    if (length>=0) {
        returnChar(text, length - 1);
    }
    else {
                
        return text[length];
    }
            
            
    i++;
}

$scope.typeLetter = function (username) {

    $interval(returnChar(username, 0), 1000, username.length)
}