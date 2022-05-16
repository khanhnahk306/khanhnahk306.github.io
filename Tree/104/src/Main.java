public class Main {
    public static void main(String[] args) {

        System.out.println(maxDepth(new TreeNode()));
    }

    public static int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
