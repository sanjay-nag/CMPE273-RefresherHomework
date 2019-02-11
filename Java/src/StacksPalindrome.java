import java.util.Scanner;
import java.util.Stack;

public class StacksPalindrome {

    public static void main(String[] args) {

        System.out.println("Enter a string to check if it's a palindrome ");

        Scanner scanner = new Scanner(System.in);
        String inputString = scanner.nextLine();

        Integer palindrome = isPalindrome(inputString);

        if(palindrome == 1) {
            System.out.println("Is a palindrome");
        } else if(palindrome == 0) {
            System.out.println("Not a palindrome");
        } else {
            System.out.println("Enter a proper string");
        }
    }

    public static int isPalindrome(String inputString) {

        if(inputString.length() == 0) {
            return -1;
        }

        Stack stack = new Stack();

        for(int i = 0; i < inputString.length(); i++) {
            stack.push(inputString.charAt(i));
        }

        for(int j = 0; j < stack.size(); j++) {
            if(!stack.pop().equals(inputString.charAt(j))) {
                return 0;
            }
        }

        return 1;
    }

}