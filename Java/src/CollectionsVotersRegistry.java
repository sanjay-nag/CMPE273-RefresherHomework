import java.util.HashSet;
import java.util.Set;

public class CollectionsVotersRegistry {

    public static void main(String[] args) {

        String[] voters = {"Sanjay", "Akhilesh", "Bharath", "Chandan", "Anand", "Sachin", "Vignesh"};

        Set legitVoters = legitVoters(voters);
    }

    public static Set legitVoters(String[] voters) {

        Set votersRegistry = new HashSet();

        for(int i =0; i < voters.length; i++) {
            votersRegistry.add(voters[i]);

        }
        return votersRegistry;
    }
}
