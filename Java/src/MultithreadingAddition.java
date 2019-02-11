import java.util.ArrayList;
import java.util.List;

public class MultithreadingAddition extends Thread{

    static List<Integer> finalSumArray = new ArrayList<Integer>();

    public void run() {
        int sum = 0;
        for(int i=0; i<=10; i++) {
            sum+=i;
            String threadName = Thread.currentThread().getName();
            System.out.println("Sum in " + threadName + " : " + sum);
            try {
                if(Integer.parseInt(threadName.substring(threadName.length() - 1))%2 == 0) {
                    Thread.sleep(1000);
                }
                else {
                    Thread.sleep(2000);
                }
            } catch (InterruptedException e) {
                System.out.println("Exception caused");
                e.printStackTrace();
            }
        }
        System.out.println("Final sum in " + Thread.currentThread().getName() + " : " + sum);
        finalSumArray.add(sum);
    }
}
