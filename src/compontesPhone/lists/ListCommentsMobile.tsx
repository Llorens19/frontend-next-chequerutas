'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CommentCard from '@/components/comments/CommentCard';
import CommentCreate from '@/components/comments/CommentCreate';
import CommentCardSkeleton from '@/components/comments/skeletons/CommentCardSkeleton';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';
import { useRuteCommentsQuery } from '@/reactQuery/queries/comments.query';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { ICommentsRouteProps } from '@/shared/interfaces/components/comments/CommentsRoute.interface';
import { IComment } from '@/shared/interfaces/entities/comment.interface';
import CommentCreateMobile from '@/compontesPhone/comments/CommentCreateMobile';

const ListCommentsMobile = ({ idRoute }: ICommentsRouteProps) => {
  const { data: routeComments, isLoading: isLoadingComments } = useRuteCommentsQuery(idRoute);
  const { data: userLogged, isLoading } = useGetUserQuery();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openModal = () => {
    setIsSearchOpen(true);
    window.history.pushState({ modalOpen: true }, '');
  };

  const closeModal = () => {
    setIsSearchOpen(false);
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? 'hidden' : 'auto';
  }, [isSearchOpen]);

  if (routeComments === undefined) {
    return <div>Loading...</div>;
  }

  const { comments } = routeComments;
  const charging = isLoading || isLoadingComments;

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        <MobileIcons size="34px" color="var(--text1)" icon="comments" />
      </div>

      {isSearchOpen && (
        <motion.div
          className="fixed inset-0 z-[10000000000] bg-color2 bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-color2 w-full max-w-3xl h-screen max-h-screen rounded-lg shadow-lg overflow-y-auto p-6 relative pb-24 "
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >

            <div className="flex flex-col gap-4 w-full mx-auto">


              {!charging &&
                comments &&
                comments.map((comment: IComment) => (
                  <CommentCard comment={comment} key={comment.idComment} />
                ))}

              {charging &&
                [1, 2, 3, 4, 5].map((n) => <CommentCardSkeleton key={n} />)}
            </div>
            {userLogged && <CommentCreateMobile idRoute={idRoute} />}

          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ListCommentsMobile;
