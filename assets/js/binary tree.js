document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('calculateHeightBtn');
    const resultParagraph = document.getElementById('result');

    button.addEventListener('click', function() {
        const treeInput = document.getElementById('treeInput').value;
        const root = constructBinaryTree(treeInput);
        const height = treeHeight(root);
        resultParagraph.textContent = "Height of the binary tree: " + height;
    });

    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    function treeHeight(root) {
        if (root === null) {
            return 0;
        } else {
            const leftHeight = treeHeight(root.left);
            const rightHeight = treeHeight(root.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    function constructBinaryTree(input) {
        const values = input.split(',').map(value => parseInt(value.trim()));
        return constructTreeFromArray(values);
    }

    function constructTreeFromArray(values) {
        if (values.length === 0) {
            return null;
        }

        const root = new TreeNode(values[0]);
        const queue = [root];
        let i = 1;

        while (i < values.length) {
            const currentNode = queue.shift();

            const leftValue = values[i++];
            if (leftValue !== null && leftValue !== undefined) {
                currentNode.left = new TreeNode(leftValue);
                queue.push(currentNode.left);
            }

            const rightValue = values[i++];
            if (rightValue !== null && rightValue !== undefined) {
                currentNode.right = new TreeNode(rightValue);
                queue.push(currentNode.right);
            }
        }

        return root;
    }
});