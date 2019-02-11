import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class QueuesPalindromeTest {

    @Test
    void isPalindromeTestWithAPalindrome() {
        QueuesPalindrome queues = new QueuesPalindrome();
        Assertions.assertEquals(1,queues.isPalindrome("malayalam"));
    }

    @Test
    void isPalindromeTestWithNotAPalindrome() {
        QueuesPalindrome queues = new QueuesPalindrome();
        Assertions.assertEquals(0,queues.isPalindrome("sanjay"));
    }

    @Test
    void isPalindromeTestWithAEmptyString() {
        QueuesPalindrome queues = new QueuesPalindrome();
        Assertions.assertEquals(-1,queues.isPalindrome(""));
    }
}