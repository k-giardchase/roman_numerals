function roman_translator (number) {
 var remainder = 0;
    while(number > 0) {

        var final = [];
        var split_number = number.toString().split('');
        var rev_num = split_number.reverse();

        if (rev_num[0] <= 3) {
            var total = rev_num[0] / 1;
            final[0]= "I".repeat(total);
            remainder = number % 1;
            number = remainder;
        }

        else if (rev_num[0] == 4) {
            final[0] = "IV";
            remainder = rev_num[0] % 4;
            number = remainder;
        }
        else if (rev_num[0] >= 5 && rev_num[0] < 9) {
            var total = rev_num[0] % 5;
            final[0]= "V" + "I".repeat(total);
            remainder = number % 1;
            number = remainder;

        } else if (rev_num[0] == 9) {
            final[0] = 'IX';
            remainder = number % 9;
            number = remainder;
        }

        if (rev_num[1] <= 3) {
            var total = rev_num[1] / 1;
            final[1]= "X".repeat(total);
            remainder = number % 1;
            number = remainder;
        } else if (rev_num[1] == 4) {
            final[1] = "XL";
            remainder = rev_num[1] % 4;
            number = remainder;
        } else if (rev_num[1] >= 5 && rev_num[1] < 9) {
            var total = rev_num[1] % 5;
            final[1] = 'L' + 'X'.repeat(total);
            remainder = number % 1;
            number = remainder;
        } else if (rev_num[1] == 9) {
            final[1] = 'XC';
            remainder = number % 9;
            number = remainder;
        }


        if (rev_num[2] <= 3) {
            var total = rev_num[2] / 1;
            final[2]= "C".repeat(total);
            remainder = number % 1;
            number = remainder;
        } else if (rev_num[2] == 4) {
            final[2] = "CD";
            remainder = rev_num[2] % 4;
            number = remainder;
        } else if (rev_num[2] >= 5 && rev_num[2] < 9) {
            var total = rev_num[2] % 5;
            final[2] = 'D' + 'C'.repeat(total);
            remainder = number % 1;
            number = remainder;
        } else if (rev_num[2] == 9) {
            final[2] = 'CM';
            remainder = number % 9;
            number = remainder;
        }


        if (rev_num[3] <= 3) {
            var total = rev_num[3] / 1;
            final[3]= "M".repeat(total);
            remainder = number % 1;
            number = remainder;
        }

    }

        var very_final = final.reverse().join('');
        return very_final;

}


        $(document).ready(function() {

            $('#translator').submit(function(event) {

        var number = $('input#number').val();

        var result = roman_translator(number);

        $('.roman').text(result);

        $('#result').show();

        event.preventDefault();
    });
});
