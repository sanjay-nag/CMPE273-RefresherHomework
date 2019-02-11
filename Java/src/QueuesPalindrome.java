import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class QueuesPalindrome {

    public static void main(String[] args) {
//        System.out.println("Enter a string to check if it's a palindrome ");
//
//        Scanner scanner = new Scanner(System.in);
//        String inputString = scanner.nextLine();
//
//        Integer palindrome = isPalindrome(inputString);
//
//            if(palindrome == 1) {
//            System.out.println("Is a palindrome");
//        } else if(palindrome == 0) {
//            System.out.println("Not a palindrome");
//        } else {
//            System.out.println("Enter a proper string");
//        }
    }

    public static int isPalindrome(String inputString) {

        if(inputString.length() == 0) {
            return -1;
        }

        Queue queue = new LinkedList();

        for(int i = inputString.length() - 1; i >= 0 ; i--) {
            queue.add(inputString.charAt(i));
        }

        String reverseInputString = "";

        while (!queue.isEmpty()) {
            reverseInputString+=queue.remove();
        }

        if(inputString.equals(reverseInputString)) {
            return 1;
        } else {
            return 0;
        }

    }
}
