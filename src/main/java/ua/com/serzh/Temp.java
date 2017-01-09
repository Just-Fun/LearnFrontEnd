package ua.com.serzh;

import java.util.regex.Pattern;

/**
 * Created by Serzh on 10/3/16.
 */
public class Temp {
    public static void main(String[] args) {
        double sqrt = Math.sqrt(2);
        double a = sqrt * sqrt;
        System.out.println(a);

        Pattern p = Pattern.compile("^[a-z0-9_-]{3,15}$"); // alt + Enter = Check RegExp
    }

}
