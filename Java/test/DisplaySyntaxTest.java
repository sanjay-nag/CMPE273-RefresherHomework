import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class DisplaySyntaxTest {

    @Test
    public void testDisplayToScreenJava() {
        Java java = new Java();
        assertSame("System.out.println()", java.displayToScreen());
    }

    @Test
    public void testDisplayToScreenJavaScript() {
        JavaScript javaScript = new JavaScript();
        assertSame("Console.log()", javaScript.displayToScreen());
    }

    @Test
    public void testDisplayToScreenC() {
        C c = new C();
        assertSame("printf()", c.displayToScreen());
    }

}