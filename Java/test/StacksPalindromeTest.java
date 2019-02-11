import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class StacksPalindromeTest {

    @Test
    void isPalindromeTestWithAPalindrome() {
        StacksPalindrome stacks = new StacksPalindrome();
        Assertions.assertEquals(1,stacks.isPalindrome("malayalam"));
    }

    @Test
    void isPalindromeTestWithNotAPalindrome() {
        StacksPalindrome stacks = new StacksPalindrome();
        Assertions.assertEquals(0,stacks.isPalindrome("sanjay"));
    }

    @Test
    void isPalindromeTestWithAEmptyString() {
        StacksPalindrome stacks = new StacksPalindrome();
        Assertions.assertEquals(-1,stacks.isPalindrome(""));
    }
}